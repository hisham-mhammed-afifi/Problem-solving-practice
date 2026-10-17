import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { withForbidden } from '../_helpers/forbid.js';
import { map } from '../../problems/06-functions-closures/093-map.js';

describe('093 map', () => {
  it('map([1, 2, 3], n => n + 1) → [2, 3, 4]', () => assert.deepEqual(map([1, 2, 3], (n) => n + 1), [2, 3, 4]));
  it('map([10, 20, 30], (n, i) => n + i) → [10, 21, 32] (fn gets the index)', () => {
    assert.deepEqual(map([10, 20, 30], (n, i) => n + i), [10, 21, 32]);
  });
  it("map(['a', 'b'], s => s.toUpperCase()) → ['A', 'B']", () => {
    assert.deepEqual(map(['a', 'b'], (s) => s.toUpperCase()), ['A', 'B']);
  });
  it('map([], fn) → []', () => assert.deepEqual(map([], (n) => n * 2), []));
  it('does not change the original array', () => {
    const arr = [1, 2, 3];
    const result = map(arr, (n) => n * 10);
    assert.deepEqual(arr, [1, 2, 3]);
    assert.deepEqual(result, [10, 20, 30]);
  });
  it("rule: don't use Array.prototype.map", () => {
    const result = withForbidden([[Array.prototype, 'map']], () => map([1, 2, 3], (n) => n * 2));
    assert.deepEqual(result, [2, 4, 6]);
  });
});
