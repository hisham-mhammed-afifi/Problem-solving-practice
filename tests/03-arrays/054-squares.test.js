import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { squares } from '../../problems/03-arrays/054-squares.js';

describe('054 squares', () => {
  it('squares([1, 2, 3]) → [1, 4, 9]', () => assert.deepEqual(squares([1, 2, 3]), [1, 4, 9]));
  it('squares([]) → []', () => assert.deepEqual(squares([]), []));
  it('squares([-2, 0, 4]) → [4, 0, 16]', () => assert.deepEqual(squares([-2, 0, 4]), [4, 0, 16]));
  it('squares([1.5]) → [2.25]', () => assert.deepEqual(squares([1.5]), [2.25]));
  it('leaves the input unchanged', () => {
    const input = [2, 3];
    assert.deepEqual(squares(input), [4, 9]);
    assert.deepEqual(input, [2, 3]);
  });
});
