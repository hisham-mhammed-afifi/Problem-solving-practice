import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { createCounter } from '../../problems/06-functions-closures/092-counter-with-methods.js';

describe('092 counter with methods', () => {
  it('createCounter(5): increment() twice → 6, 7', () => {
    const c = createCounter(5);
    assert.deepEqual([c.increment(), c.increment()], [6, 7]);
  });
  it('createCounter(5): decrement() twice → 4, 3', () => {
    const c = createCounter(5);
    assert.deepEqual([c.decrement(), c.decrement()], [4, 3]);
  });
  it('createCounter(5): increment(), increment(), reset() → 5', () => {
    const c = createCounter(5);
    c.increment();
    c.increment();
    assert.equal(c.reset(), 5);
  });
  it('createCounter(0): decrement(), decrement(), reset(), increment() → -1, -2, 0, 1', () => {
    const c = createCounter(0);
    assert.deepEqual([c.decrement(), c.decrement(), c.reset(), c.increment()], [-1, -2, 0, 1]);
  });
  it('two counters do not share their value', () => {
    const a = createCounter(10);
    const b = createCounter(20);
    a.increment();
    a.increment();
    assert.deepEqual([a.increment(), b.increment()], [13, 21]);
  });
});
