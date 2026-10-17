import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { evenOrOdd } from '../../problems/01-basics-numbers/006-even-or-odd.js';

describe('006 even or odd', () => {
  it('evenOrOdd(7) → "odd"', () => assert.equal(evenOrOdd(7), 'odd'));
  it('evenOrOdd(0) → "even"', () => assert.equal(evenOrOdd(0), 'even'));
  it('evenOrOdd(10) → "even"', () => assert.equal(evenOrOdd(10), 'even'));
  it('evenOrOdd(-3) → "odd"', () => assert.equal(evenOrOdd(-3), 'odd'));
  it('evenOrOdd(-8) → "even"', () => assert.equal(evenOrOdd(-8), 'even'));
});
