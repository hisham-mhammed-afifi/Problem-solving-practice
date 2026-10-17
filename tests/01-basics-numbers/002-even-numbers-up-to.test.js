import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { evenNumbersUpTo } from '../../problems/01-basics-numbers/002-even-numbers-up-to.js';

describe('002 even numbers up to', () => {
  it('evenNumbersUpTo(10) → [0, 2, 4, 6, 8, 10]', () => assert.deepEqual(evenNumbersUpTo(10), [0, 2, 4, 6, 8, 10]));
  it('evenNumbersUpTo(0) → [0]', () => assert.deepEqual(evenNumbersUpTo(0), [0]));
  it('evenNumbersUpTo(7) → [0, 2, 4, 6]', () => assert.deepEqual(evenNumbersUpTo(7), [0, 2, 4, 6]));
  it('evenNumbersUpTo(1) → [0]', () => assert.deepEqual(evenNumbersUpTo(1), [0]));
  it('evenNumbersUpTo(1000000) → 500001 numbers, from 0 to 1000000', () => {
    const result = evenNumbersUpTo(1000000);
    assert.equal(result.length, 500001);
    assert.equal(result[0], 0);
    assert.equal(result[1], 2);
    assert.equal(result[500000], 1000000);
  });
});
