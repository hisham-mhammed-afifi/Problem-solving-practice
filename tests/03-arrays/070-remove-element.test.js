import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { removeElement } from '../../problems/03-arrays/070-remove-element.js';

describe('070 remove element', () => {
  it('removeElement([1, 2, 3, 2], 2) → [1, 3]', () => assert.deepEqual(removeElement([1, 2, 3, 2], 2), [1, 3]));
  it('removeElement([1, 2, 3], 4) → [1, 2, 3]', () => assert.deepEqual(removeElement([1, 2, 3], 4), [1, 2, 3]));
  it('removeElement([2, 2, 2], 2) → []', () => assert.deepEqual(removeElement([2, 2, 2], 2), []));
  it('removeElement([], 1) → []', () => assert.deepEqual(removeElement([], 1), []));
  it('removeElement([1, "1", 2], 1) → ["1", 2] (strict equality)', () => assert.deepEqual(removeElement([1, '1', 2], 1), ['1', 2]));
  it('leaves the input unchanged', () => {
    const input = [1, 2, 3, 2];
    assert.deepEqual(removeElement(input, 2), [1, 3]);
    assert.deepEqual(input, [1, 2, 3, 2]);
  });
});
