import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { loves } from '../../problems/05-logic-loops/088-loves.js';

describe('088 loves', () => {
  it("loves(1) → 'I love you'", () => assert.equal(loves(1), 'I love you'));
  it("loves(6) → 'not at all'", () => assert.equal(loves(6), 'not at all'));
  it("loves(7) → 'I love you' (the cycle starts again)", () => assert.equal(loves(7), 'I love you'));
  it("loves(14) → 'a little'", () => assert.equal(loves(14), 'a little'));
  it('loves(2) to loves(5) → a little, a lot, passionately, madly', () => {
    assert.deepEqual([loves(2), loves(3), loves(4), loves(5)], ['a little', 'a lot', 'passionately', 'madly']);
  });
});
