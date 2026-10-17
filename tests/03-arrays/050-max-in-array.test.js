import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { maxInArray } from '../../problems/03-arrays/050-max-in-array.js';

describe('050 max in array', () => {
  it('maxInArray([-3, -1, -7]) → -1', () => assert.equal(maxInArray([-3, -1, -7]), -1));
  it('maxInArray([5]) → 5', () => assert.equal(maxInArray([5]), 5));
  it('maxInArray([1, 9, 3]) → 9', () => assert.equal(maxInArray([1, 9, 3]), 9));
  it('maxInArray([2, 9, 9, 1]) → 9', () => assert.equal(maxInArray([2, 9, 9, 1]), 9));
  it('maxInArray([0, -5, 3.5]) → 3.5', () => assert.equal(maxInArray([0, -5, 3.5]), 3.5));
  it('maxInArray([-8, -8]) → -8', () => assert.equal(maxInArray([-8, -8]), -8));
});
