import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { toPairs } from '../../problems/04-objects/075-to-pairs.js';

describe('075 to pairs', () => {
  it("toPairs({ a: 1, b: 2 }) → [['a', 1], ['b', 2]]", () => assert.deepEqual(toPairs({ a: 1, b: 2 }), [['a', 1], ['b', 2]]));
  it('toPairs({}) → []', () => assert.deepEqual(toPairs({}), []));
  it("toPairs({ name: 'Ada' }) → [['name', 'Ada']]", () => assert.deepEqual(toPairs({ name: 'Ada' }), [['name', 'Ada']]));
  it("toPairs({ x: [1, 2], ok: true }) → [['x', [1, 2]], ['ok', true]]", () => {
    assert.deepEqual(toPairs({ x: [1, 2], ok: true }), [['x', [1, 2]], ['ok', true]]);
  });
});
