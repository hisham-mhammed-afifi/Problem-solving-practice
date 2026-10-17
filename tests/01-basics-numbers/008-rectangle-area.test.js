import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { rectangleArea } from '../../problems/01-basics-numbers/008-rectangle-area.js';

describe('008 rectangle area', () => {
  it('rectangleArea(4, 5) → 20', () => assert.equal(rectangleArea(4, 5), 20));
  it('rectangleArea(1, 1) → 1', () => assert.equal(rectangleArea(1, 1), 1));
  it('rectangleArea(0, 5) → 0', () => assert.equal(rectangleArea(0, 5), 0));
  it('rectangleArea(2.5, 4) → 10', () => assert.equal(rectangleArea(2.5, 4), 10));
});
