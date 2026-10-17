// npm run sync: pull new problems, test fixes and hints from the shared template repo into your branch.
import { git, tryGit, isGitRepo, currentBranch, branchExists, isDirty, remoteUrl, sameRepo, playgroundConfig } from './lib/git.js';

const fail = (message) => {
  console.error(`✖ ${message}`);
  process.exit(1);
};

if (!isGitRepo()) fail('This folder is not a git repository.');
if (isDirty()) fail('You have uncommitted changes. Commit them first (git add -A && git commit -m "WIP"), then run npm run sync again.');

// Forks have an "upstream" remote (added by npm start). The repo owner has no fork: their origin IS the template.
const { upstream } = playgroundConfig();
let remote;
if (remoteUrl('upstream')) {
  remote = 'upstream';
} else if (remoteUrl('origin') && upstream && sameRepo(remoteUrl('origin'), upstream)) {
  remote = 'origin';
} else {
  fail('No "upstream" remote found. Run npm start first.');
}

console.log(`Fetching ${remote}…`);
const fetched = tryGit('fetch', '--quiet', remote);
if (!fetched.ok) fail(`Could not fetch ${remote}: ${fetched.out}`);

const template = `${remote}/main`;
if (!tryGit('rev-parse', '--verify', '--quiet', template).ok) fail(`${template} doesn't exist.`);

const branch = currentBranch();
if (!branch) fail('You are on a detached HEAD. Switch to your solutions branch first.');

const before = git('rev-parse', 'HEAD');
if (branch === 'main') {
  const r = tryGit('merge', '--ff-only', template);
  if (!r.ok) fail(`Local main has diverged from ${template}. (Solutions belong on your own branch, not main.)\n${r.out}`);
} else {
  const r = tryGit('merge', '--no-edit', template);
  if (!r.ok) {
    console.error(`
✖ Merge conflict while merging ${template} into ${branch}.
  Files in conflict:
${git('diff', '--name-only', '--diff-filter=U').split('\n').map((f) => `    ${f}`).join('\n')}

  Fix them (keep YOUR solution in the problems/ file), then:  git add -A && git commit
  Or undo the merge with:  git merge --abort`);
    process.exit(1);
  }
}

const added = Number(git('rev-list', '--count', `${before}..HEAD`));
console.log(added ? `✔ Merged ${added} new commit(s) from ${template} into ${branch}` : `✔ ${branch} is already up to date with ${template}`);

// Keep your local main in step with the template (only if that's a clean fast-forward).
if (branch !== 'main' && branchExists('main') && tryGit('merge-base', '--is-ancestor', 'main', template).ok) {
  tryGit('branch', '-f', 'main', template);
}
