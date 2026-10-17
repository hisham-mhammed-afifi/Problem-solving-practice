// npm start: run once after cloning. Sets up the git hook, the upstream remote, and your own
// solutions branch (solutions/<your-name>) so nothing you solve ever lands on main.
//   npm start                  uses your `git config user.name`
//   npm start -- --name sara   picks the branch name yourself
import { chmodSync } from 'node:fs';
import { join } from 'node:path';
import { ROOT } from './lib/problems.js';
import { git, tryGit, isGitRepo, currentBranch, branchExists, remoteUrl, sameRepo, playgroundConfig, slugify } from './lib/git.js';

if (Number(process.versions.node.split('.')[0]) < 20) {
  console.error(`Node 20 or newer is required (you have ${process.versions.node}).`);
  process.exit(1);
}
if (!isGitRepo()) {
  console.error('This folder is not a git repository. Clone your fork first, then run npm start inside it.');
  process.exit(1);
}

const args = process.argv.slice(2);
const nameFlag = args.indexOf('--name');
const rawName = nameFlag >= 0 ? args[nameFlag + 1] : tryGit('config', 'user.name').out;
const name = slugify(rawName ?? '');
if (!name) {
  console.error('Could not work out your name. Set it with  git config user.name "Your Name"  or run  npm start -- --name your-name');
  process.exit(1);
}
const branch = `solutions/${name}`;

// 1. Hook that stops solutions being committed to main.
git('config', 'core.hooksPath', '.githooks');
try {
  chmodSync(join(ROOT, '.githooks', 'pre-commit'), 0o755);
} catch {
  // not fatal (e.g. file system without modes)
}
console.log('✔ Git hook installed: solutions can no longer be committed to main');

// 2. Remember where the template lives so `npm run sync` can pull updates.
const { upstream } = playgroundConfig();
const origin = remoteUrl('origin');
if (upstream && origin && !sameRepo(origin, upstream) && !remoteUrl('upstream')) {
  git('remote', 'add', 'upstream', upstream);
  console.log(`✔ Added remote "upstream" → ${upstream}`);
}

// 3. Your branch.
const current = currentBranch();
if (current === branch) {
  console.log(`✔ Already on ${branch}`);
} else if (branchExists(branch)) {
  git('switch', branch);
  console.log(`✔ Switched to your existing branch ${branch}`);
} else if (tryGit('show-ref', '--verify', '--quiet', `refs/remotes/origin/${branch}`).ok) {
  git('switch', '-c', branch, '--track', `origin/${branch}`);
  console.log(`✔ Checked out ${branch} from origin`);
} else {
  const base = branchExists('main') ? 'main' : (current ?? 'HEAD');
  git('switch', '-c', branch, base);
  console.log(`✔ Created ${branch} from ${base}`);
}

console.log(`
You're ready. Everything you solve goes on ${branch}.

  npm run next        open your first unsolved problem and watch its tests
  npm run p 14        run one problem's tests        (npm run w 14 to watch)
  npm run hint 14     stuck? reveal a hint
  npm run progress    see how many you've solved

Commit as you go:  git add -A && git commit -m "Solve 001 greet"
`);
