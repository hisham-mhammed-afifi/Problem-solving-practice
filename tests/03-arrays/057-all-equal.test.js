import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { allEqual } from '../../problems/03-arrays/057-all-equal.js';

describe('057 all equal', () => {
  it('allEqual([2, 2, 2]) → true', () => assert.equal(allEqual([2, 2, 2]), true));
  it('allEqual([2, 2, 3]) → false', () => assert.equal(allEqual([2, 2, 3]), false));
  it('allEqual([3, 2, 2]) → false', () => assert.equal(allEqual([3, 2, 2]), false));
  it('allEqual([]) → true', () => assert.equal(allEqual([]), true));
  it('allEqual([7]) → true', () => assert.equal(allEqual([7]), true));
  it('allEqual([1, "1"]) → false (strict equality)', () => assert.equal(allEqual([1, '1']), false));
});
