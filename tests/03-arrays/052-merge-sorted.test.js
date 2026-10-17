import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { withForbidden } from '../_helpers/forbid.js';
import { mergeSorted } from '../../problems/03-arrays/052-merge-sorted.js';

describe('052 merge sorted', () => {
  it('mergeSorted([1, 3, 5], [2, 4, 6]) → [1, 2, 3, 4, 5, 6]', () => assert.deepEqual(mergeSorted([1, 3, 5], [2, 4, 6]), [1, 2, 3, 4, 5, 6]));
  it('mergeSorted([], [1, 2]) and mergeSorted([3, 4], []) → the other array', () => {
    assert.deepEqual(mergeSorted([], [1, 2]), [1, 2]);
    assert.deepEqual(mergeSorted([3, 4], []), [3, 4]);
  });
  it('mergeSorted([], []) → []', () => assert.deepEqual(mergeSorted([], []), []));
  it('mergeSorted([1, 2, 2], [2, 3]) → [1, 2, 2, 2, 3]', () => assert.deepEqual(mergeSorted([1, 2, 2], [2, 3]), [1, 2, 2, 2, 3]));
  it('mergeSorted([-5, 0, 7, 8, 9], [1]) → [-5, 0, 1, 7, 8, 9]', () => assert.deepEqual(mergeSorted([-5, 0, 7, 8, 9], [1]), [-5, 0, 1, 7, 8, 9]));
  it('leaves both inputs unchanged', () => {
    const a = [1, 3, 5];
    const b = [2, 4];
    assert.deepEqual(mergeSorted(a, b), [1, 2, 3, 4, 5]);
    assert.deepEqual(a, [1, 3, 5]);
    assert.deepEqual(b, [2, 4]);
  });
  it("rule: don't use Array.prototype.sort", () => {
    const result = withForbidden([[Array.prototype, 'sort']], () => mergeSorted([1, 3, 5], [2, 4, 6]));
    assert.deepEqual(result, [1, 2, 3, 4, 5, 6]);
  });
});
