// Small wrappers around the git CLI.
import { execFileSync, spawnSync } from 'node:child_process';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { ROOT } from './problems.js';

const noPrompt = { ...process.env, GIT_TERMINAL_PROMPT: '0' };

/** Runs git and returns trimmed stdout. Throws with git's message on failure. */
export function git(...args) {
  try {
    return execFileSync('git', args, { cwd: ROOT, encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'], env: noPrompt }).trim();
  } catch (error) {
    const message = `${error.stderr ?? ''}${error.stdout ?? ''}`.trim() || error.message;
    throw new Error(message);
  }
}

/** Runs git, never throws. Returns { ok, out }. */
export function tryGit(...args) {
  const r = spawnSync('git', args, { cwd: ROOT, encoding: 'utf8', env: noPrompt });
  return { ok: r.status === 0, out: `${r.stdout ?? ''}${r.stderr ?? ''}`.trim() };
}

export function isGitRepo() {
  return tryGit('rev-parse', '--is-inside-work-tree').out === 'true';
}

/** Current branch name, or null when detached / not a repo. */
export function currentBranch() {
  const r = tryGit('symbolic-ref', '--short', '-q', 'HEAD');
  return r.ok && r.out ? r.out : null;
}

export function isTemplateBranch(branch) {
  return branch === 'main' || branch === 'master';
}

export function isDirty() {
  return git('status', '--porcelain') !== '';
}

export function branchExists(name) {
  return tryGit('show-ref', '--verify', '--quiet', `refs/heads/${name}`).ok;
}

export function remoteUrl(name) {
  const r = tryGit('remote', 'get-url', name);
  return r.ok ? r.out : null;
}

/** Compare repo URLs ignoring scheme, `.git`, case, and https-vs-ssh spelling. */
export function sameRepo(a, b) {
  const norm = (url) =>
    url
      .trim()
      .replace(/^git@([^:]+):/, '$1/')
      .replace(/^[a-z+]+:\/\//, '')
      .replace(/^[^@/]+@/, '')
      .replace(/\.git$/, '')
      .replace(/\/+$/, '')
      .toLowerCase();
  return norm(a) === norm(b);
}

export function playgroundConfig() {
  return JSON.parse(readFileSync(join(ROOT, 'package.json'), 'utf8')).playground ?? {};
}

/** "Hesham Afifi" -> "hesham-afifi" */
export function slugify(name) {
  return name
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}
