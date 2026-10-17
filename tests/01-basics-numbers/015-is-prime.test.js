import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { isPrime } from '../../problems/01-basics-numbers/015-is-prime.js';

describe('015 is prime', () => {
  it('isPrime(1) → false', () => assert.equal(isPrime(1), false));
  it('isPrime(2) → true', () => assert.equal(isPrime(2), true));
  it('isPrime(97) → true', () => assert.equal(isPrime(97), true));
  it('isPrime(0) → false', () => assert.equal(isPrime(0), false));
  it('isPrime(-7) → false', () => assert.equal(isPrime(-7), false));
  it('isPrime(9) → false', () => assert.equal(isPrime(9), false));
  it('isPrime(100) → false', () => assert.equal(isPrime(100), false));
});
