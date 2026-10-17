// npm run check: sanity-checks the template itself. CI runs this on main.
//   - problems are numbered 1..N with no gaps, each has a test file and 3 hints
//   - every test file loads (no syntax errors / missing exports) and runs
//   - stubs on main are still empty: no solution has leaked in, and tests aren't trivially passable
// On a solutions branch use  npm run check -- --allow-solutions  to skip the "stubs are empty" rules.
import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { ROOT, listProblems, isStubEmpty } from './lib/problems.js';
import { runMany } from './lib/results.js';

const allowSolutions = process.argv.includes('--allow-solutions');
const problems = listProblems();
const issues = [];

problems.forEach((p, i) => {
  if (p.n !== i + 1) issues.push(`Numbering: expected problem ${i + 1} but found ${p.n} (${p.slug}). Numbers must be 1..N with no gaps or duplicates.`);
});

const hintsByCategory = new Map();
for (const p of problems) {
  if (!existsSync(p.test)) issues.push(`#${p.n} ${p.slug}: missing test file ${p.test}`);

  if (!hintsByCategory.has(p.category)) {
    const file = join(ROOT, 'hints', `${p.category}.json`);
    hintsByCategory.set(p.category, existsSync(file) ? JSON.parse(readFileSync(file, 'utf8')) : {});
  }
  const hints = hintsByCategory.get(p.category)[p.n];
  if (!Array.isArray(hints) || hints.length !== 3 || hints.some((h) => typeof h !== 'string' || !h.trim())) {
    issues.push(`#${p.n} ${p.slug}: needs exactly 3 non-empty hints in hints/${p.category}.json`);
  }

  if (!allowSolutions && !isStubEmpty(p)) {
    issues.push(`#${p.n} ${p.slug}: stub no longer contains "// your code here". Has a solution been committed to main?`);
  }
}

console.log(`Running ${problems.length} test files…`);
const results = await runMany(problems.filter((p) => existsSync(p.test)));
const loadErrors = /SyntaxError|does not provide an export named|ERR_MODULE_NOT_FOUND|Cannot find module|ReferenceError/;

for (const p of problems) {
  const r = results.get(p.n);
  if (!r) continue;
  if (loadErrors.test(r.output)) issues.push(`#${p.n} ${p.slug}: test or stub failed to load (syntax error / missing export)`);
  else if (r.status === 'timeout') issues.push(`#${p.n} ${p.slug}: tests hung (timed out)`);
  else if (!allowSolutions && r.status === 'pass') issues.push(`#${p.n} ${p.slug}: tests PASS on an empty stub. Tests are too weak, or a solution leaked in.`);
}

if (issues.length) {
  console.error(`\n✖ ${issues.length} problem(s):\n${issues.map((i) => `  - ${i}`).join('\n')}`);
  process.exit(1);
}
console.log(`\n✔ Template OK: ${problems.length} problems, each with a test and 3 hints${allowSolutions ? '' : ', all stubs empty'}.`);
