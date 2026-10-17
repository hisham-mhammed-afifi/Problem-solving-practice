import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { sleep } from '../../problems/06-functions-closures/100-sleep.js';

describe('100 sleep', () => {
  const timeSleep = async (ms) => {
    const start = Date.now();
    await sleep(ms);
    return Date.now() - start;
  };
  it('sleep(100) → resolves after about 100 ms', async () => {
    const elapsed = await timeSleep(100);
    assert.ok(elapsed >= 100 - 5, 'resolved too early: ' + elapsed + ' ms');
  });
  it('sleep(50) → resolves after about 50 ms', async () => {
    const elapsed = await timeSleep(50);
    assert.ok(elapsed >= 50 - 5, 'resolved too early: ' + elapsed + ' ms');
  });
  it('sleep(10) → returns a Promise', async () => {
    const p = sleep(10);
    assert.ok(p instanceof Promise, 'sleep must return a Promise');
    await p;
  });
  it('sleep(0) → resolves', async () => {
    await sleep(0);
  });
});
