import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { calc } from '../../problems/01-basics-numbers/012-calc.js';

describe('012 calc', () => {
  it('calc("+", 2, 3) → 5', () => assert.equal(calc('+', 2, 3), 5));
  it('calc("/", 8, 2) → 4', () => assert.equal(calc('/', 8, 2), 4));
  it('calc("-", 2, 5) → -3', () => assert.equal(calc('-', 2, 5), -3));
  it('calc("*", 4, 3) → 12', () => assert.equal(calc('*', 4, 3), 12));
  it('calc("/", 7, 2) → 3.5', () => assert.equal(calc('/', 7, 2), 3.5));
});
