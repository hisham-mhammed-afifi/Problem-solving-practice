import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { difference } from '../../problems/03-arrays/062-difference.js';

describe('062 difference', () => {
  it('difference([1, 2, 3, 4], [2, 4]) → [1, 3]', () => assert.deepEqual(difference([1, 2, 3, 4], [2, 4]), [1, 3]));
  it('difference([1, 2, 2, 3], [3]) → [1, 2, 2] (duplicates in a are kept)', () => assert.deepEqual(difference([1, 2, 2, 3], [3]), [1, 2, 2]));
  it('difference([4, 1, 3, 2], [1]) → [4, 3, 2] and leaves the inputs unchanged', () => {
    const a = [4, 1, 3, 2];
    const b = [1];
    assert.deepEqual(difference(a, b), [4, 3, 2]);
    assert.deepEqual(a, [4, 1, 3, 2]);
    assert.deepEqual(b, [1]);
  });
  it('difference([1, 2], []) → [1, 2]', () => assert.deepEqual(difference([1, 2], []), [1, 2]));
  it('difference([], [1]) → []', () => assert.deepEqual(difference([], [1]), []));
  it('difference([1, 2, 3], [3, 4, 5]) → [1, 2]', () => assert.deepEqual(difference([1, 2, 3], [3, 4, 5]), [1, 2]));
});
