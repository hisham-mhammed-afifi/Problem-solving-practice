import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { flatten } from '../../problems/03-arrays/061-flatten.js';

describe('061 flatten', () => {
  it('flatten([1, [2, [3, [4]]]]) → [1, 2, 3, 4]', () => assert.deepEqual(flatten([1, [2, [3, [4]]]]), [1, 2, 3, 4]));
  it('flatten([1, 2, 3]) → [1, 2, 3]', () => assert.deepEqual(flatten([1, 2, 3]), [1, 2, 3]));
  it('flatten([]) → []', () => assert.deepEqual(flatten([]), []));
  it('flatten([[], [[]]]) → []', () => assert.deepEqual(flatten([[], [[]]]), []));
  it('flatten([[1, 2], [3, [4, [5, 6]]], 7]) → [1, 2, 3, 4, 5, 6, 7]', () => assert.deepEqual(flatten([[1, 2], [3, [4, [5, 6]]], 7]), [1, 2, 3, 4, 5, 6, 7]));
  it('leaves the input unchanged', () => {
    const input = [1, [2, [3]]];
    assert.deepEqual(flatten(input), [1, 2, 3]);
    assert.deepEqual(input, [1, [2, [3]]]);
  });
});
