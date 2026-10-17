// npm run p 14        run problem 14's tests
// npm run w 14        same, re-running on every save
// npm test            run every problem's tests
// (VS Code F5 uses --debug so breakpoints in your solution are hit)
import { spawn } from 'node:child_process';
import { pathToFileURL } from 'node:url';
import { findProblem, listProblems, titleOf } from './lib/problems.js';

const args = process.argv.slice(2);
const flags = new Set(args.filter((a) => a.startsWith('--')));
const target = args.find((a) => !a.startsWith('--'));

function runNode(nodeArgs) {
  const child = spawn(process.execPath, nodeArgs, { stdio: 'inherit' });
  child.on('exit', (code) => process.exit(code ?? 1));
}

if (flags.has('--all')) {
  runNode(['--test', '--test-reporter=spec', '--test-timeout=5000', ...listProblems().map((p) => p.test)]);
} else {
  const problem = findProblem(target);
  if (!problem) {
    const last = listProblems().length;
    console.error(
      target
        ? `No problem found for "${target}". Use a number from 1 to ${last}, e.g. npm run p 14`
        : `Which problem? e.g. npm run p 14  (1–${last}). Not sure where to start? npm run next`,
    );
    process.exit(1);
  }

  console.log(`\n▶ Problem ${problem.n}: ${titleOf(problem)}\n  ${problem.stub}\n`);

  if (flags.has('--debug')) {
    // Run in this process so the debugger sees your code.
    await import(pathToFileURL(problem.test).href);
  } else if (flags.has('--watch')) {
    runNode(['--test', '--watch', '--test-reporter=spec', '--test-timeout=5000', problem.test]);
  } else {
    runNode(['--test-timeout=5000', problem.test]);
  }
}
