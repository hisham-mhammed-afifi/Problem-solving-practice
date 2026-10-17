import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { removeDuplicates } from '../../problems/03-arrays/051-remove-duplicates.js';

describe('051 remove duplicates', () => {
  it('removeDuplicates([1, 2, 2, 3, 1]) → [1, 2, 3]', () => assert.deepEqual(removeDuplicates([1, 2, 2, 3, 1]), [1, 2, 3]));
  it('removeDuplicates([]) → []', () => assert.deepEqual(removeDuplicates([]), []));
  it('removeDuplicates([1, 2, 3]) → [1, 2, 3]', () => assert.deepEqual(removeDuplicates([1, 2, 3]), [1, 2, 3]));
  it('removeDuplicates([4, 4, 4]) → [4]', () => assert.deepEqual(removeDuplicates([4, 4, 4]), [4]));
  it('removeDuplicates([3, 1, 3, 2, 1]) → [3, 1, 2] (first-seen order)', () => assert.deepEqual(removeDuplicates([3, 1, 3, 2, 1]), [3, 1, 2]));
  it('removeDuplicates(["a", "b", "a"]) → ["a", "b"] and leaves the input unchanged', () => {
    const input = ['a', 'b', 'a'];
    assert.deepEqual(removeDuplicates(input), ['a', 'b']);
    assert.deepEqual(input, ['a', 'b', 'a']);
  });
});
