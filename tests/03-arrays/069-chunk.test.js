import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { chunk } from '../../problems/03-arrays/069-chunk.js';

describe('069 chunk', () => {
  it('chunk([1, 2, 3, 4, 5], 2) → [[1, 2], [3, 4], [5]]', () => assert.deepEqual(chunk([1, 2, 3, 4, 5], 2), [[1, 2], [3, 4], [5]]));
  it('chunk([1, 2, 3, 4], 2) → [[1, 2], [3, 4]]', () => assert.deepEqual(chunk([1, 2, 3, 4], 2), [[1, 2], [3, 4]]));
  it('chunk([1, 2], 5) → [[1, 2]]', () => assert.deepEqual(chunk([1, 2], 5), [[1, 2]]));
  it('chunk([1, 2, 3], 1) → [[1], [2], [3]]', () => assert.deepEqual(chunk([1, 2, 3], 1), [[1], [2], [3]]));
  it('chunk([], 3) → []', () => assert.deepEqual(chunk([], 3), []));
  it('leaves the input unchanged', () => {
    const input = [1, 2, 3, 4, 5];
    assert.deepEqual(chunk(input, 2), [[1, 2], [3, 4], [5]]);
    assert.deepEqual(input, [1, 2, 3, 4, 5]);
  });
});
