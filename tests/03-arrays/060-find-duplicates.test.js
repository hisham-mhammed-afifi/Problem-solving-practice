import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { findDuplicates } from '../../problems/03-arrays/060-find-duplicates.js';

describe('060 find duplicates', () => {
  it('findDuplicates([1, 2, 3, 2, 1, 4]) → [1, 2]', () => assert.deepEqual(findDuplicates([1, 2, 3, 2, 1, 4]), [1, 2]));
  it('findDuplicates([1, 2, 3]) → []', () => assert.deepEqual(findDuplicates([1, 2, 3]), []));
  it('findDuplicates([]) → []', () => assert.deepEqual(findDuplicates([]), []));
  it('findDuplicates([5, 5, 5, 5]) → [5]', () => assert.deepEqual(findDuplicates([5, 5, 5, 5]), [5]));
  it('findDuplicates([2, 1, 1, 2]) → [2, 1] (first-seen order)', () => assert.deepEqual(findDuplicates([2, 1, 1, 2]), [2, 1]));
  it('findDuplicates(["a", "b", "a"]) → ["a"]', () => assert.deepEqual(findDuplicates(['a', 'b', 'a']), ['a']));
});
