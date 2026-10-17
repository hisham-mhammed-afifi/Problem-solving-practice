import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { withForbidden } from '../_helpers/forbid.js';
import { filter } from '../../problems/06-functions-closures/094-filter.js';

describe('094 filter', () => {
  it('filter([0, 10, 20, 30], n => n > 10) → [20, 30]', () => {
    assert.deepEqual(filter([0, 10, 20, 30], (n) => n > 10), [20, 30]);
  });
  it('filter([10, 20, 30], (n, i) => i !== 1) → [10, 30] (fn gets the index)', () => {
    assert.deepEqual(filter([10, 20, 30], (n, i) => i !== 1), [10, 30]);
  });
  it('filter([0, 1, 2, 3], n => n) → [1, 2, 3] (truthy values are kept)', () => {
    assert.deepEqual(filter([0, 1, 2, 3], (n) => n), [1, 2, 3]);
  });
  it('filter([1, 2, 3], n => n > 5) → []', () => assert.deepEqual(filter([1, 2, 3], (n) => n > 5), []));
  it('filter([], fn) → []', () => assert.deepEqual(filter([], () => true), []));
  it('does not change the original array', () => {
    const arr = [1, 2, 3, 4];
    const result = filter(arr, (n) => n % 2 === 0);
    assert.deepEqual(arr, [1, 2, 3, 4]);
    assert.deepEqual(result, [2, 4]);
  });
  it("rule: don't use Array.prototype.filter", () => {
    const result = withForbidden([[Array.prototype, 'filter']], () => filter([1, 2, 3, 4], (n) => n > 2));
    assert.deepEqual(result, [3, 4]);
  });
});
