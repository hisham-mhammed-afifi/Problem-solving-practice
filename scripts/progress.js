// npm run progress: runs every problem's tests and shows how many you've solved.
// On a solutions branch it also writes PROGRESS.md (a checklist you can commit).
import { writeFileSync, appendFileSync } from 'node:fs';
import { join } from 'node:path';
import { ROOT, listProblems, groupByCategory, categoryTitle, titleOf } from './lib/problems.js';
import { runMany } from './lib/results.js';
import { currentBranch, isGitRepo, isTemplateBranch } from './lib/git.js';

const problems = listProblems();
const total = problems.length;
const tty = process.stdout.isTTY;

const results = await runMany(problems, {
  onDone: (_p, _r, done) => tty && process.stdout.write(`\rRunning tests… ${done}/${total}`),
});
if (tty) process.stdout.write(`\r${' '.repeat(40)}\r`);

const solved = (p) => results.get(p.n).status === 'pass';
const solvedCount = problems.filter(solved).length;
const groups = groupByCategory(problems);

// ---- terminal output
const bar = (done, of, width = 20) => '█'.repeat(Math.round((done / of) * width)).padEnd(width, '░');
const nameWidth = Math.max(...[...groups.keys()].map((c) => categoryTitle(c).length));

console.log('');
for (const [category, list] of groups) {
  const done = list.filter(solved).length;
  console.log(`${categoryTitle(category).padEnd(nameWidth)}  ${bar(done, list.length)}  ${String(done).padStart(2)}/${list.length}`);
}
console.log(`${'─'.repeat(nameWidth + 30)}\n${'Total'.padEnd(nameWidth)}  ${bar(solvedCount, total)}  ${String(solvedCount).padStart(2)}/${total}\n`);

const timedOut = problems.filter((p) => results.get(p.n).status === 'timeout');
for (const p of timedOut) console.log(`⏱  #${p.n} timed out. Is there an infinite loop?`);

const nextUp = problems.find((p) => !solved(p));
console.log(nextUp ? `Next up: #${nextUp.n} ${titleOf(nextUp)}   (npm run next)` : '🎉 All problems solved!');

// ---- markdown
const lines = [`# Progress: ${solvedCount}/${total} solved`, '', '| Category | Solved |', '|---|---|'];
for (const [category, list] of groups) lines.push(`| ${categoryTitle(category)} | ${list.filter(solved).length}/${list.length} |`);
lines.push('');
for (const [category, list] of groups) {
  lines.push(`## ${categoryTitle(category)}`, '');
  for (const p of list) lines.push(`- [${solved(p) ? 'x' : ' '}] ${p.n}. ${titleOf(p)}`);
  lines.push('');
}
const markdown = lines.join('\n');

if (process.env.GITHUB_STEP_SUMMARY) appendFileSync(process.env.GITHUB_STEP_SUMMARY, `${markdown}\n`);

const branch = isGitRepo() ? currentBranch() : null;
if (branch && !isTemplateBranch(branch)) {
  writeFileSync(join(ROOT, 'PROGRESS.md'), `${markdown}\n`);
  console.log(`\nWrote PROGRESS.md (branch ${branch})`);
}
