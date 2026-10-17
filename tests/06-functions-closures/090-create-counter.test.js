import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { createCounter } from '../../problems/06-functions-closures/090-create-counter.js';

describe('090 create counter', () => {
  it('createCounter(10), called 3 times → 10, 11, 12', () => {
    const next = createCounter(10);
    assert.deepEqual([next(), next(), next()], [10, 11, 12]);
  });
  it('createCounter(-2), called 5 times → -2, -1, 0, 1, 2', () => {
    const next = createCounter(-2);
    assert.deepEqual([next(), next(), next(), next(), next()], [-2, -1, 0, 1, 2]);
  });
  it('createCounter(0) → 0 on the first call', () => {
    const next = createCounter(0);
    assert.equal(next(), 0);
  });
  it('two counters do not share their count', () => {
    const a = createCounter(1);
    const b = createCounter(100);
    assert.deepEqual([a(), a(), b(), a(), b()], [1, 2, 100, 3, 101]);
  });
});
