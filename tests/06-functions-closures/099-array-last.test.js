import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import '../../problems/06-functions-closures/099-array-last.js';

describe('099 array last', () => {
  it('[1, 2, 3].last() → 3', () => assert.equal([1, 2, 3].last(), 3));
  it('[].last() → -1', () => assert.equal([].last(), -1));
  it("['a'].last() → 'a' (one element)", () => assert.equal(['a'].last(), 'a'));
  it('[5, 0].last() → 0 (a falsy last element is still returned)', () => assert.equal([5, 0].last(), 0));
  it('[1, null].last() → null', () => assert.equal([1, null].last(), null));
  it('does not change the array', () => {
    const arr = [1, 2, 3];
    arr.last();
    assert.deepEqual(arr, [1, 2, 3]);
  });
});
