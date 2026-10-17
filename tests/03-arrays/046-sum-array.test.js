import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { sumArray } from '../../problems/03-arrays/046-sum-array.js';

describe('046 sum array', () => {
  it('sumArray([1, 2, 3.5, -1]) → 5.5', () => assert.equal(sumArray([1, 2, 3.5, -1]), 5.5));
  it('sumArray([]) → 0', () => assert.equal(sumArray([]), 0));
  it('sumArray([5]) → 5', () => assert.equal(sumArray([5]), 5));
  it('sumArray([-4, -6]) → -10', () => assert.equal(sumArray([-4, -6]), -10));
  it('sumArray([10, 20, 30]) → 60', () => assert.equal(sumArray([10, 20, 30]), 60));
});
