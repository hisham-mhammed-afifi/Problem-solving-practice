import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { fillArray } from '../../problems/03-arrays/066-fill-array.js';

describe('066 fill array', () => {
  it('fillArray(3, "x") → ["x", "x", "x"]', () => assert.deepEqual(fillArray(3, 'x'), ['x', 'x', 'x']));
  it('fillArray(0, "x") → []', () => assert.deepEqual(fillArray(0, 'x'), []));
  it('fillArray(1, 7) → [7]', () => assert.deepEqual(fillArray(1, 7), [7]));
  it('fillArray(4, 0) → [0, 0, 0, 0]', () => assert.deepEqual(fillArray(4, 0), [0, 0, 0, 0]));
  it('fillArray(2, null) → [null, null]', () => assert.deepEqual(fillArray(2, null), [null, null]));
});
