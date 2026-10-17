import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { withForbidden } from '../_helpers/forbid.js';
import { indexOfValue } from '../../problems/03-arrays/055-index-of-value.js';

describe('055 index of value', () => {
  it('indexOfValue([5, 8, 3, 8], 8) → 1 (the first match)', () => assert.equal(indexOfValue([5, 8, 3, 8], 8), 1));
  it('indexOfValue([5, 8, 3], 5) → 0', () => assert.equal(indexOfValue([5, 8, 3], 5), 0));
  it('indexOfValue([5, 8, 3], 3) → 2', () => assert.equal(indexOfValue([5, 8, 3], 3), 2));
  it('indexOfValue([5, 8, 3], 7) → -1', () => assert.equal(indexOfValue([5, 8, 3], 7), -1));
  it('indexOfValue([], 1) → -1', () => assert.equal(indexOfValue([], 1), -1));
  it('indexOfValue([1, 2, 3], "2") → -1 (strict equality)', () => assert.equal(indexOfValue([1, 2, 3], '2'), -1));
  it("rule: don't use indexOf, lastIndexOf, findIndex or includes", () => {
    const forbidden = [
      [Array.prototype, 'indexOf'],
      [Array.prototype, 'lastIndexOf'],
      [Array.prototype, 'findIndex'],
      [Array.prototype, 'includes'],
    ];
    const result = withForbidden(forbidden, () => [indexOfValue([5, 8, 3], 3), indexOfValue([5, 8, 3], 7)]);
    assert.deepEqual(result, [2, -1]);
  });
});
