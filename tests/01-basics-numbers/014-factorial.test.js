import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { factorial } from '../../problems/01-basics-numbers/014-factorial.js';

describe('014 factorial', () => {
  it('factorial(5) → 120', () => assert.equal(factorial(5), 120));
  it('factorial(0) → 1', () => assert.equal(factorial(0), 1));
  it('factorial(1) → 1', () => assert.equal(factorial(1), 1));
  it('factorial(10) → 3628800', () => assert.equal(factorial(10), 3628800));
});
