// npm run next: opens your first unsolved problem in VS Code and starts watching its tests.
import { spawn, spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { listProblems, titleOf } from './lib/problems.js';
import { firstUnsolved } from './lib/results.js';
import { currentBranch, isGitRepo, isTemplateBranch } from './lib/git.js';

const branch = isGitRepo() ? currentBranch() : null;
if (branch && isTemplateBranch(branch)) {
  console.error(`You're on "${branch}", which is the clean template. Run  npm start  first to get your own solutions branch.`);
  process.exit(1);
}

console.log('Finding your next unsolved problem…');
const problem = await firstUnsolved(listProblems());

if (!problem) {
  console.log('🎉 Every problem is solved. Nice work! Try  npm run compare <n>  to see how teammates did it.');
  process.exit(0);
}

console.log(`\nNext: #${problem.n} ${titleOf(problem)}\n  ${problem.stub}`);

const opened = spawnSync('code', ['-g', `"${problem.stub}"`], { shell: true, stdio: 'ignore' });
if (opened.status !== 0) console.log('  (could not run the `code` command, so open that file yourself)');

console.log(`\nWatching its tests. Save the file to re-run. Ctrl+C to stop. Stuck? npm run hint ${problem.n}\n`);
const runScript = fileURLToPath(new URL('./run.js', import.meta.url));
const child = spawn(process.execPath, [runScript, '--watch', String(problem.n)], { stdio: 'inherit' });
child.on('exit', (code) => process.exit(code ?? 0));
