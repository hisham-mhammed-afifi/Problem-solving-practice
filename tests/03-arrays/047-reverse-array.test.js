import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { reverseArray } from '../../problems/03-arrays/047-reverse-array.js';

describe('047 reverse array', () => {
  it('reverseArray([1, 2, 3]) → [3, 2, 1]', () => assert.deepEqual(reverseArray([1, 2, 3]), [3, 2, 1]));
  it('reverseArray([1, 2, 3, 4]) → [4, 3, 2, 1]', () => assert.deepEqual(reverseArray([1, 2, 3, 4]), [4, 3, 2, 1]));
  it('reverseArray([]) → []', () => assert.deepEqual(reverseArray([]), []));
  it('reverseArray([7]) → [7]', () => assert.deepEqual(reverseArray([7]), [7]));
  it('reverseArray(["a", "b"]) → ["b", "a"]', () => assert.deepEqual(reverseArray(['a', 'b']), ['b', 'a']));
  it('returns a new array and leaves the input unchanged', () => {
    const input = [1, 2, 3];
    const result = reverseArray(input);
    assert.deepEqual(result, [3, 2, 1]);
    assert.deepEqual(input, [1, 2, 3]);
    assert.notEqual(result, input);
  });
});
