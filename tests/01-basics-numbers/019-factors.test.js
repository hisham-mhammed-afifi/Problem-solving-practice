import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { factors } from '../../problems/01-basics-numbers/019-factors.js';

describe('019 factors', () => {
  it('factors(12) → [1, 2, 3, 4, 6, 12]', () => assert.deepEqual(factors(12), [1, 2, 3, 4, 6, 12]));
  it('factors(1) → [1]', () => assert.deepEqual(factors(1), [1]));
  it('factors(7) → [1, 7]', () => assert.deepEqual(factors(7), [1, 7]));
  it('factors(36) → [1, 2, 3, 4, 6, 9, 12, 18, 36]', () => assert.deepEqual(factors(36), [1, 2, 3, 4, 6, 9, 12, 18, 36]));
});
