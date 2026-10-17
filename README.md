# JavaScript Problem-Solving Playground

100 easy JavaScript problems, each with an empty starter file, automatic tests, and hints.
Solve them on your own branch, then see how your teammates did it. No dependencies. You only need
**Node 20+** and **git**.

The full list is in [PROBLEMS.md](PROBLEMS.md).

## Getting started

1. **Fork** this repo on GitHub, then clone **your fork**:
   ```bash
   git clone https://github.com/<you>/Problem-solving-practice.git
   cd Problem-solving-practice
   ```
2. **Run once:**
   ```bash
   npm start
   ```
   This creates and switches to your own branch, `solutions/<your-name>`. Everything you solve goes there, and a git
   hook stops you committing solutions to `main`.
3. **Start solving:**
   ```bash
   npm run next
   ```
   It opens your first unsolved problem in VS Code and re-runs its tests every time you save.

## How a problem works

Each problem is a file in `problems/<category>/`, for example `problems/01-basics-numbers/014-factorial.js`:

```js
/**
 * 14. Factorial
 * Return n! (the product of 1..n). factorial(0) is 1.
 * ...
 */
export function factorial(n) {
  // your code here
}
```

Replace the comment with your code. The matching test file is `tests/<category>/014-factorial.test.js`. Test names
read like the spec (`factorial(5) → 120`), so a failure tells you exactly what's expected.

- **Rules:** a few problems say "Don't use X" (for example `Math.max`). The tests enforce it with a separate
  `rule:` test that fails with *Rule broken: don't use …*.
- **Return, don't print:** tests check what your function *returns*.
- **Docs are the spec:** the comment above each function states every edge case the tests check.

## Commands

| Command | What it does |
|---|---|
| `npm start` | Run once after cloning: installs the git hook and creates your `solutions/<name>` branch. `npm start -- --name sara` picks the name. |
| `npm run next` | Opens your first unsolved problem and watches its tests. |
| `npm run p 14` | Runs problem 14's tests once. |
| `npm run w 14` | Same, but re-runs on every save. |
| `npm run hint 14` | Reveals the next hint (3 per problem). Run it again for a stronger hint. `-- --reset` hides them. |
| `npm run progress` | Runs everything, shows your score per category, and writes `PROGRESS.md` on your branch. |
| `npm test` | Runs every problem's tests. |
| `npm run sync` | Pulls new problems, test fixes and hints from the original repo into your branch. |
| `npm run compare 14` | After **you** solve problem 14, shows how teammates in `team.json` solved it. |
| `npm run check` | Sanity-checks the template (for maintainers and CI). |

**Debugging:** open a problem file and press **F5** ("Debug current problem"). Breakpoints in your solution work.

## Your git workflow

```bash
git add -A
git commit -m "Solve 014 factorial"
git push -u origin solutions/<your-name>
```

Commit as often as you like. `main` stays the clean template. Pull template updates whenever you want:

```bash
npm run sync
```

If you get a merge conflict, keep **your** version of the `problems/` file.

### Join the team (compare solutions)

`npm run compare` reads teammates' solution branches from [team.json](team.json). To appear in it:

```bash
git switch -c add-<your-name> main
# edit team.json: add { "name": "<your-name>", "repo": "https://github.com/<you>/Problem-solving-practice.git" }
git commit -am "Add <your-name> to team"
git push -u origin add-<your-name>      # then open a PR against the original repo's main
```

`name` must match your branch: `solutions/<name>`. Your fork must be public (or readable by your teammates).

## For maintainers

- **Protect `main`** on GitHub: Settings → Branches → add a rule for `main` (require a pull request before merging, and
  require the `template` CI check). CI runs `npm run check`, which fails if a stub contains a solution.
- **Never change a released problem's function name or signature.** Developers' solutions depend on it, and it keeps
  `npm run sync` merges clean. Add new problems as new files with the next number instead.
- **Adding a problem:** copy an existing stub, test and hints entry. Use the next number, keep the
  `// your code here` marker, give it exactly 3 hints in `hints/<category>.json`, then run `npm run check`.
- **Committing problem changes on `main`:** the hook blocks changes to `problems/` on `main`. For deliberate template
  edits, set `PLAYGROUND_MAINTAINER=1` for that commit.
  - bash: `PLAYGROUND_MAINTAINER=1 git commit -m "..."`
  - PowerShell: `$env:PLAYGROUND_MAINTAINER=1; git commit -m "..."`
- **Layout:** `problems/` (stubs), `tests/` (tests, plus `tests/_helpers/forbid.js` for rule checks), `hints/`
  (one JSON per category), `scripts/` (the commands above).
