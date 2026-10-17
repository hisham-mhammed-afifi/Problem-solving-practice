import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { sortThree } from '../../problems/05-logic-loops/084-sort-three.js';

describe('084 sort three', () => {
  it('sortThree(3, 1, 2) → [1, 2, 3]', () => assert.deepEqual(sortThree(3, 1, 2), [1, 2, 3]));
  it('sortThree(1, 2, 3) → [1, 2, 3]', () => assert.deepEqual(sortThree(1, 2, 3), [1, 2, 3]));
  it('sortThree(1, 3, 2) → [1, 2, 3]', () => assert.deepEqual(sortThree(1, 3, 2), [1, 2, 3]));
  it('sortThree(2, 3, 1) → [1, 2, 3]', () => assert.deepEqual(sortThree(2, 3, 1), [1, 2, 3]));
  it('sortThree(3, 2, 1) → [1, 2, 3]', () => assert.deepEqual(sortThree(3, 2, 1), [1, 2, 3]));
  it('sortThree(-1, -5, 0) → [-5, -1, 0]', () => assert.deepEqual(sortThree(-1, -5, 0), [-5, -1, 0]));
  it('sortThree(2, 2, 1) → [1, 2, 2]', () => assert.deepEqual(sortThree(2, 2, 1), [1, 2, 2]));
});
