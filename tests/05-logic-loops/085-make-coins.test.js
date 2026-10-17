import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { makeCoins } from '../../problems/05-logic-loops/085-make-coins.js';

describe('085 make coins', () => {
  it('makeCoins(46, [25, 10, 5, 1]) → [25, 10, 10, 1]', () => assert.deepEqual(makeCoins(46, [25, 10, 5, 1]), [25, 10, 10, 1]));
  it('makeCoins(30, [25, 10, 5, 1]) → [25, 5]', () => assert.deepEqual(makeCoins(30, [25, 10, 5, 1]), [25, 5]));
  it('makeCoins(3, [25, 10, 5, 1]) → [1, 1, 1]', () => assert.deepEqual(makeCoins(3, [25, 10, 5, 1]), [1, 1, 1]));
  it('makeCoins(0, [25, 10, 5, 1]) → []', () => assert.deepEqual(makeCoins(0, [25, 10, 5, 1]), []));
  it('makeCoins(50, [25, 10, 5, 1]) → [25, 25]', () => assert.deepEqual(makeCoins(50, [25, 10, 5, 1]), [25, 25]));
  it('makeCoins(6, [4, 3, 1]) → [4, 1, 1] (greedy, not the fewest coins)', () => assert.deepEqual(makeCoins(6, [4, 3, 1]), [4, 1, 1]));
});
