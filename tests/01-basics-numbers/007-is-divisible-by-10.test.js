import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { isDivisibleBy10 } from '../../problems/01-basics-numbers/007-is-divisible-by-10.js';

describe('007 is divisible by 10', () => {
  it('isDivisibleBy10(30) → true', () => assert.equal(isDivisibleBy10(30), true));
  it('isDivisibleBy10(35) → false', () => assert.equal(isDivisibleBy10(35), false));
  it('isDivisibleBy10(0) → true', () => assert.equal(isDivisibleBy10(0), true));
  it('isDivisibleBy10(-20) → true', () => assert.equal(isDivisibleBy10(-20), true));
  it('isDivisibleBy10(101) → false', () => assert.equal(isDivisibleBy10(101), false));
});
