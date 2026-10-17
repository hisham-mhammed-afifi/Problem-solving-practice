import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { triangleArea } from '../../problems/01-basics-numbers/009-triangle-area.js';

describe('009 triangle area', () => {
  it('triangleArea(5, 6, 7) → 14.6969…', () => assert.equal(Math.abs(triangleArea(5, 6, 7) - 14.696938456699069) < 0.000001, true));
  it('triangleArea(3, 4, 5) → 6', () => assert.equal(Math.abs(triangleArea(3, 4, 5) - 6) < 0.000001, true));
  it('triangleArea(5, 5, 5) → 10.8253…', () => assert.equal(Math.abs(triangleArea(5, 5, 5) - 10.825317547305483) < 0.000001, true));
  it('triangleArea(13, 14, 15) → 84', () => assert.equal(Math.abs(triangleArea(13, 14, 15) - 84) < 0.000001, true));
});
