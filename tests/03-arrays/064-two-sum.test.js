import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { twoSum } from '../../problems/03-arrays/064-two-sum.js';

describe('064 two sum', () => {
  it('twoSum([2, 7, 11, 15], 9) → [0, 1]', () => assert.deepEqual(twoSum([2, 7, 11, 15], 9), [0, 1]));
  it('twoSum([3, 2, 4], 6) → [1, 2]', () => assert.deepEqual(twoSum([3, 2, 4], 6), [1, 2]));
  it('twoSum([3, 3], 6) → [0, 1]', () => assert.deepEqual(twoSum([3, 3], 6), [0, 1]));
  it('twoSum([-1, -2, -3, -4, -5], -8) → [2, 4]', () => assert.deepEqual(twoSum([-1, -2, -3, -4, -5], -8), [2, 4]));
  it('twoSum([0, 4, 3, 0], 0) → [0, 3]', () => assert.deepEqual(twoSum([0, 4, 3, 0], 0), [0, 3]));
});
