import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { closestTo100 } from '../../problems/05-logic-loops/087-closest-to-100.js';

describe('087 closest to 100', () => {
  it('closestTo100(90, 105) → 105', () => assert.equal(closestTo100(90, 105), 105));
  it('closestTo100(99, 100) → 100', () => assert.equal(closestTo100(99, 100), 100));
  it('closestTo100(1000, 3) → 3', () => assert.equal(closestTo100(1000, 3), 3));
  it('closestTo100(-20, 50) → 50', () => assert.equal(closestTo100(-20, 50), 50));
  it('closestTo100(95, 105) → 95 (tie: first argument)', () => assert.equal(closestTo100(95, 105), 95));
  it('closestTo100(105, 95) → 105 (tie: first argument)', () => assert.equal(closestTo100(105, 95), 105));
});
