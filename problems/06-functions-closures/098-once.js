/**
 * 98. Once
 * Return a wrapper around fn that only lets fn run one time.
 * The first call runs fn with the wrapper's arguments and returns its result. Every later call returns undefined and does not call fn again.
 * Each wrapper keeps track of its own calls.
 *
 * Examples:
 *   const f = once((a, b) => a + b);
 *   f(1, 2) → 3
 *   f(5, 5) → undefined
 *
 * @param {(...args: any[]) => any} fn
 * @returns {(...args: any[]) => any}
 */
export function once(fn) {
  // your code here
}
