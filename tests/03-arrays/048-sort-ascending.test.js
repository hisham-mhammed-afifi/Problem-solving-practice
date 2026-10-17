import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { sortAscending } from '../../problems/03-arrays/048-sort-ascending.js';

describe('048 sort ascending', () => {
  it('sortAscending([10, 9, -1, 2.5, 100]) → [-1, 2.5, 9, 10, 100]', () => assert.deepEqual(sortAscending([10, 9, -1, 2.5, 100]), [-1, 2.5, 9, 10, 100]));
  it('sortAscending([]) → []', () => assert.deepEqual(sortAscending([]), []));
  it('sortAscending([3]) → [3]', () => assert.deepEqual(sortAscending([3]), [3]));
  it('sortAscending([3, 1, 2, 3, 1]) → [1, 1, 2, 3, 3]', () => assert.deepEqual(sortAscending([3, 1, 2, 3, 1]), [1, 1, 2, 3, 3]));
  it('sortAscending([-2, -10, 5, 0]) → [-10, -2, 0, 5]', () => assert.deepEqual(sortAscending([-2, -10, 5, 0]), [-10, -2, 0, 5]));
  it('sortAscending([100, 25, 5, 1]) → [1, 5, 25, 100]', () => assert.deepEqual(sortAscending([100, 25, 5, 1]), [1, 5, 25, 100]));
});
