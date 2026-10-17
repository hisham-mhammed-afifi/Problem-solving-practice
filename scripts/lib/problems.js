// Finds problems (stub + test file pairs) on disk. Problem files are named NNN-slug.js.
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join, dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

export const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..', '..');

const CATEGORY_TITLES = {
  '01-basics-numbers': 'Basics & Numbers',
  '02-strings': 'Strings',
  '03-arrays': 'Arrays',
  '04-objects': 'Objects',
  '05-logic-loops': 'Logic & Loops',
  '06-functions-closures': 'Functions & Closures',
};

export const EMPTY_STUB_MARKER = '// your code here';

export function categoryTitle(category) {
  return CATEGORY_TITLES[category] ?? category.replace(/^\d+-/, '').replace(/-/g, ' ');
}

let cache;

/** All problems, ordered by number: { n, id, slug, category, stub, test } */
export function listProblems() {
  if (cache) return cache;
  const problemsDir = join(ROOT, 'problems');
  const found = [];
  for (const category of readdirSync(problemsDir).sort()) {
    const dir = join(problemsDir, category);
    if (!statSync(dir).isDirectory()) continue;
    for (const file of readdirSync(dir)) {
      const match = /^(\d{3})-(.+)\.js$/.exec(file);
      if (!match) continue;
      const [, id, slug] = match;
      found.push({
        n: Number(id),
        id,
        slug,
        category,
        stub: join(dir, file),
        test: join(ROOT, 'tests', category, `${id}-${slug}.test.js`),
      });
    }
  }
  cache = found.sort((a, b) => a.n - b.n);
  return cache;
}

const normalize = (p) => (process.platform === 'win32' ? p.toLowerCase() : p);

/** Look a problem up by number ("14") or by the path of its stub or test file. */
export function findProblem(arg) {
  if (arg === undefined || arg === '') return null;
  const problems = listProblems();
  if (/^\d+$/.test(arg)) return problems.find((p) => p.n === Number(arg)) ?? null;
  const target = normalize(resolve(arg));
  return problems.find((p) => normalize(p.stub) === target || normalize(p.test) === target) ?? null;
}

/** "Factorial" from the `14. Factorial` line in the stub's header comment. */
export function titleOf(problem) {
  const match = /^\s*\* \d+\. (.+)$/m.exec(readFileSync(problem.stub, 'utf8'));
  return match ? match[1] : problem.slug;
}

export function isStubEmpty(problem) {
  return readFileSync(problem.stub, 'utf8').includes(EMPTY_STUB_MARKER);
}

export function groupByCategory(problems) {
  const groups = new Map();
  for (const p of problems) {
    if (!groups.has(p.category)) groups.set(p.category, []);
    groups.get(p.category).push(p);
  }
  return groups;
}
