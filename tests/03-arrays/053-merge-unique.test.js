import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { mergeUnique } from '../../problems/03-arrays/053-merge-unique.js';

describe('053 merge unique', () => {
  it('mergeUnique([1, 2, 3], [2, 3, 4]) → [1, 2, 3, 4]', () => assert.deepEqual(mergeUnique([1, 2, 3], [2, 3, 4]), [1, 2, 3, 4]));
  it('mergeUnique([1, 1, 2], [2, 3, 3]) → [1, 2, 3]', () => assert.deepEqual(mergeUnique([1, 1, 2], [2, 3, 3]), [1, 2, 3]));
  it('mergeUnique([3, 1], [2, 3, 1]) → [3, 1, 2] (first-seen order)', () => assert.deepEqual(mergeUnique([3, 1], [2, 3, 1]), [3, 1, 2]));
  it('mergeUnique([], [1, 1]) → [1]', () => assert.deepEqual(mergeUnique([], [1, 1]), [1]));
  it('mergeUnique([], []) → []', () => assert.deepEqual(mergeUnique([], []), []));
  it('mergeUnique(["a", "b"], ["b", "c"]) → ["a", "b", "c"] and leaves the inputs unchanged', () => {
    const a = ['a', 'b'];
    const b = ['b', 'c'];
    assert.deepEqual(mergeUnique(a, b), ['a', 'b', 'c']);
    assert.deepEqual(a, ['a', 'b']);
    assert.deepEqual(b, ['b', 'c']);
  });
});
