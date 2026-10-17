// npm run compare 14: after YOU solve problem 14, see how your teammates solved it.
// Teammates are listed in team.json. Their branches are fetched into refs/team/<name>, so they
// don't clutter your own branches or remotes.
import { readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { ROOT, EMPTY_STUB_MARKER, findProblem, titleOf } from './lib/problems.js';
import { runFile } from './lib/results.js';
import { tryGit, currentBranch } from './lib/git.js';

const problem = findProblem(process.argv[2]);
if (!problem) {
  console.error('Which problem? e.g. npm run compare 14');
  process.exit(1);
}

console.log(`Checking your solution to #${problem.n} ${titleOf(problem)}…`);
if ((await runFile(problem.test)).status !== 'pass') {
  console.log(`\nSolve it first (npm run p ${problem.n}), then you can see how teammates did it. No spoilers!`);
  process.exit(0);
}

const teamFile = join(ROOT, 'team.json');
const team = existsSync(teamFile) ? JSON.parse(readFileSync(teamFile, 'utf8')) : [];
const me = (currentBranch() ?? '').replace(/^solutions\//, '');
const others = team.filter((member) => member.name !== me);
if (!others.length) {
  console.log('\nNobody else is in team.json yet. Add yourself and your teammates (see the README).');
  process.exit(0);
}

const relPath = `problems/${problem.category}/${problem.id}-${problem.slug}.js`;
let shown = 0;

for (const member of others) {
  const branch = member.branch ?? `solutions/${member.name}`;
  const ref = `refs/team/${member.name}`;

  const fetched = tryGit('fetch', '--quiet', '--no-tags', member.repo, `+refs/heads/${branch}:${ref}`);
  if (!fetched.ok) {
    console.log(`\n· ${member.name}: couldn't fetch ${branch} from ${member.repo}`);
    continue;
  }
  const file = tryGit('show', `${ref}:${relPath}`);
  if (!file.ok) {
    console.log(`\n· ${member.name}: no ${relPath} on ${branch}`);
    continue;
  }
  if (file.out.includes(EMPTY_STUB_MARKER)) {
    console.log(`\n· ${member.name}: hasn't solved #${problem.n} yet`);
    continue;
  }

  // Skip the header comment (problem text) and show just the code.
  const end = file.out.indexOf('*/');
  const code = (end >= 0 ? file.out.slice(end + 2) : file.out).trim();
  console.log(`\n── ${member.name} ${'─'.repeat(Math.max(4, 50 - member.name.length))}\n${code}`);
  shown++;
}

console.log(shown ? `\nCompare with yours: ${problem.stub}` : '\nNo teammate solutions to show for this one yet.');
