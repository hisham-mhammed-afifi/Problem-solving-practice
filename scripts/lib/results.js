// Runs problem test files and reports pass / fail / timeout per problem.
// Each test file runs as its own process (`node <file>`) so a solution stuck in an
// infinite loop can be killed without taking anything else down.
import { execFile } from 'node:child_process';
import { availableParallelism } from 'node:os';

const KILL_AFTER_MS = 20_000;

export function runFile(testFile) {
  return new Promise((resolve) => {
    execFile(
      process.execPath,
      ['--test-timeout=5000', testFile],
      { timeout: KILL_AFTER_MS, killSignal: 'SIGKILL', windowsHide: true, maxBuffer: 16 * 1024 * 1024 },
      (error, stdout, stderr) => {
        const output = `${stdout}${stderr}`;
        if (!error) return resolve({ status: 'pass', output });
        resolve({ status: error.killed ? 'timeout' : 'fail', output });
      },
    );
  });
}

/** Runs every problem's tests with a small worker pool. Returns Map<number, {status, output}>. */
export async function runMany(problems, { onDone } = {}) {
  const results = new Map();
  const workers = Math.max(1, Math.min(availableParallelism(), 8, problems.length));
  let next = 0;

  async function worker() {
    while (next < problems.length) {
      const problem = problems[next++];
      const result = await runFile(problem.test);
      results.set(problem.n, result);
      onDone?.(problem, result, results.size);
    }
  }

  await Promise.all(Array.from({ length: workers }, worker));
  return results;
}

/** First problem (in order) whose tests don't all pass, or null if everything is solved. */
export async function firstUnsolved(problems, batchSize = 8) {
  for (let i = 0; i < problems.length; i += batchSize) {
    const batch = problems.slice(i, i + batchSize);
    const results = await runMany(batch);
    const unsolved = batch.find((p) => results.get(p.n).status !== 'pass');
    if (unsolved) return unsolved;
  }
  return null;
}
