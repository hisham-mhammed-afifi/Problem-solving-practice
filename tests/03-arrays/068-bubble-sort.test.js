import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { withForbidden } from '../_helpers/forbid.js';
import { bubbleSort } from '../../problems/03-arrays/068-bubble-sort.js';

describe('068 bubble sort', () => {
  it('bubbleSort([5, 2, 9, 1]) → [1, 2, 5, 9]', () => assert.deepEqual(bubbleSort([5, 2, 9, 1]), [1, 2, 5, 9]));
  it('bubbleSort([1, 2, 3]) → [1, 2, 3]', () => assert.deepEqual(bubbleSort([1, 2, 3]), [1, 2, 3]));
  it('bubbleSort([4, 3, 2, 1]) → [1, 2, 3, 4]', () => assert.deepEqual(bubbleSort([4, 3, 2, 1]), [1, 2, 3, 4]));
  it('bubbleSort([3, 1, 3, 2]) → [1, 2, 3, 3]', () => assert.deepEqual(bubbleSort([3, 1, 3, 2]), [1, 2, 3, 3]));
  it('bubbleSort([-2, 10, -7, 0]) → [-7, -2, 0, 10]', () => assert.deepEqual(bubbleSort([-2, 10, -7, 0]), [-7, -2, 0, 10]));
  it('bubbleSort([]) and bubbleSort([8]) → [] and [8]', () => {
    assert.deepEqual(bubbleSort([]), []);
    assert.deepEqual(bubbleSort([8]), [8]);
  });
  it("rule: don't use Array.prototype.sort", () => {
    const result = withForbidden([[Array.prototype, 'sort']], () => bubbleSort([5, 2, 9, 1]));
    assert.deepEqual(result, [1, 2, 5, 9]);
  });
});
