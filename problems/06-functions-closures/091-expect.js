/**
 * 91. Expect
 * Write a tiny version of a testing library. expect(val) returns an object with two methods:
 * - toBe(other): returns true if val === other. Otherwise it throws new Error('Not Equal').
 * - notToBe(other): returns true if val !== other. Otherwise it throws new Error('Equal').
 * Compare with strict equality (===), so 5 and '5' are different.
 *
 * Examples:
 *   expect(5).toBe(5) → true
 *   expect(5).toBe(null) → throws Error('Not Equal')
 *   expect(5).notToBe(null) → true
 *   expect(5).notToBe(5) → throws Error('Equal')
 *
 * @param {any} val
 * @returns {{ toBe: (other: any) => boolean, notToBe: (other: any) => boolean }}
 */
export function expect(val) {
  // your code here
}
