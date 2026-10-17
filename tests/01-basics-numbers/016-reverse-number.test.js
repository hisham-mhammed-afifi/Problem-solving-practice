import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { reverseNumber } from '../../problems/01-basics-numbers/016-reverse-number.js';

describe('016 reverse number', () => {
  it('reverseNumber(32243) → 34223', () => assert.equal(reverseNumber(32243), 34223));
  it('reverseNumber(123) → 321', () => assert.equal(reverseNumber(123), 321));
  it('reverseNumber(7) → 7', () => assert.equal(reverseNumber(7), 7));
  it('reverseNumber(0) → 0', () => assert.equal(reverseNumber(0), 0));
  it('reverseNumber(1200) → 21', () => assert.equal(reverseNumber(1200), 21));
});
