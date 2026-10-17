import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { removeNegatives } from '../../problems/03-arrays/049-remove-negatives.js';

describe('049 remove negatives', () => {
  it('removeNegatives([3, -1, 0, -5, 8]) → [3, 0, 8]', () => assert.deepEqual(removeNegatives([3, -1, 0, -5, 8]), [3, 0, 8]));
  it('removeNegatives([]) → []', () => assert.deepEqual(removeNegatives([]), []));
  it('removeNegatives([-1, -2]) → []', () => assert.deepEqual(removeNegatives([-1, -2]), []));
  it('removeNegatives([0, 4, 2]) → [0, 4, 2]', () => assert.deepEqual(removeNegatives([0, 4, 2]), [0, 4, 2]));
  it('removeNegatives([-0.5, 0.5]) → [0.5]', () => assert.deepEqual(removeNegatives([-0.5, 0.5]), [0.5]));
  it('leaves the input unchanged', () => {
    const input = [3, -1, 0, -5, 8];
    assert.deepEqual(removeNegatives(input), [3, 0, 8]);
    assert.deepEqual(input, [3, -1, 0, -5, 8]);
  });
});
