import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { compose } from '../../problems/06-functions-closures/096-compose.js';

describe('096 compose', () => {
  it('compose([x => x + 1, x => x * x, x => 2 * x])(4) → 65', () => {
    const fn = compose([(x) => x + 1, (x) => x * x, (x) => 2 * x]);
    assert.equal(fn(4), 65);
  });
  it('compose([x => x + 1, x => x * 2])(4) → 9 (right function runs first)', () => {
    const fn = compose([(x) => x + 1, (x) => x * 2]);
    assert.equal(fn(4), 9);
  });
  it("compose([x => x + 'a', x => x + 'b'])('') → 'ba'", () => {
    const fn = compose([(x) => x + 'a', (x) => x + 'b']);
    assert.equal(fn(''), 'ba');
  });
  it('compose([x => x * x])(5) → 25 (one function)', () => assert.equal(compose([(x) => x * x])(5), 25));
  it('compose([])(7) → 7 (identity)', () => assert.equal(compose([])(7), 7));
  it('the composed function can be called more than once', () => {
    const fn = compose([(x) => x + 1, (x) => x * 3]);
    assert.deepEqual([fn(1), fn(2), fn(1)], [4, 7, 4]);
  });
});
