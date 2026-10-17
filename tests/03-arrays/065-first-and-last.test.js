import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { first, last } from '../../problems/03-arrays/065-first-and-last.js';

describe('065 first and last', () => {
  it('first([1, 2, 3, 4], 2) → [1, 2]', () => assert.deepEqual(first([1, 2, 3, 4], 2), [1, 2]));
  it('last([1, 2, 3, 4], 2) → [3, 4]', () => assert.deepEqual(last([1, 2, 3, 4], 2), [3, 4]));
  it('first([1, 2, 3], 0) → []', () => assert.deepEqual(first([1, 2, 3], 0), []));
  it('last([1, 2, 3], 0) → []', () => assert.deepEqual(last([1, 2, 3], 0), []));
  it('n bigger than the array → all elements, as new arrays; input unchanged', () => {
    const arr = [1, 2];
    const a = first(arr, 5);
    const b = last(arr, 5);
    assert.deepEqual(a, [1, 2]);
    assert.deepEqual(b, [1, 2]);
    assert.notEqual(a, arr);
    assert.notEqual(b, arr);
    assert.deepEqual(arr, [1, 2]);
  });
  it('first([], 3) and last([], 3) → []', () => {
    assert.deepEqual(first([], 3), []);
    assert.deepEqual(last([], 3), []);
  });
});
