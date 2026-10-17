import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { once } from '../../problems/06-functions-closures/098-once.js';

describe('098 once', () => {
  it('once(fn): first call returns fn(...args), second call → undefined', () => {
    const f = once((a, b, c) => a + b + c);
    assert.equal(f(1, 2, 3), 6);
    assert.equal(f(2, 3, 6), undefined);
  });
  it('once(fn): later calls → undefined every time', () => {
    const f = once((x) => x * 2);
    assert.deepEqual([f(5), f(5), f(5), f(5)], [10, undefined, undefined, undefined]);
  });
  it('once(fn): fn runs exactly one time', () => {
    let calls = 0;
    const f = once(() => {
      calls++;
      return 'done';
    });
    f();
    f();
    f();
    assert.equal(calls, 1);
  });
  it('once(fn): fn gets the arguments of the FIRST call only', () => {
    const seen = [];
    const f = once((...args) => seen.push(args));
    f('a', 'b');
    f('c', 'd');
    assert.deepEqual(seen, [['a', 'b']]);
  });
  it('two wrappers do not share their state', () => {
    const a = once(() => 'A');
    const b = once(() => 'B');
    assert.deepEqual([a(), b(), a(), b()], ['A', 'B', undefined, undefined]);
  });
});
