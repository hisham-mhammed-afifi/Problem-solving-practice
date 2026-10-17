// npm run hint 14            reveal the next hint for problem 14 (3 per problem)
// npm run hint 14 -- --reset hide them again
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { ROOT, findProblem, titleOf } from './lib/problems.js';

const args = process.argv.slice(2);
const reset = args.includes('--reset');
const problem = findProblem(args.find((a) => !a.startsWith('--')));

if (!problem) {
  console.error('Which problem? e.g. npm run hint 14');
  process.exit(1);
}

const hintsFile = join(ROOT, 'hints', `${problem.category}.json`);
const hints = existsSync(hintsFile) ? JSON.parse(readFileSync(hintsFile, 'utf8'))[problem.n] : null;
if (!hints?.length) {
  console.error(`No hints for problem ${problem.n} yet.`);
  process.exit(1);
}

const stateDir = join(ROOT, '.playground');
const stateFile = join(stateDir, 'state.json');
let state = { hints: {} };
try {
  state = JSON.parse(readFileSync(stateFile, 'utf8'));
  state.hints ??= {};
} catch {
  // first run
}

if (reset) {
  delete state.hints[problem.n];
} else {
  state.hints[problem.n] = Math.min((state.hints[problem.n] ?? 0) + 1, hints.length);
}
mkdirSync(stateDir, { recursive: true });
writeFileSync(stateFile, JSON.stringify(state, null, 2));

if (reset) {
  console.log(`Hints for #${problem.n} hidden again.`);
  process.exit(0);
}

const shown = state.hints[problem.n];
console.log(`\nProblem ${problem.n}: ${titleOf(problem)}\n`);
hints.slice(0, shown).forEach((hint, i) => console.log(`💡 Hint ${i + 1}/${hints.length}: ${hint}\n`));
console.log(shown < hints.length ? `Still stuck? Run the same command for hint ${shown + 1}.` : "That's every hint. Time to dig in. You've got this!");
