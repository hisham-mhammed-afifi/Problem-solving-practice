import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { gcd } from '../../problems/01-basics-numbers/017-gcd.js';

describe('017 gcd', () => {
  it('gcd(12, 18) → 6', () => assert.equal(gcd(12, 18), 6));
  it('gcd(7, 13) → 1', () => assert.equal(gcd(7, 13), 1));
  it('gcd(100, 25) → 25', () => assert.equal(gcd(100, 25), 25));
  it('gcd(21, 21) → 21', () => assert.equal(gcd(21, 21), 21));
  it('gcd(0, 5) → 5', () => assert.equal(gcd(0, 5), 5));
  it('gcd(5, 0) → 5', () => assert.equal(gcd(5, 0), 5));
});
