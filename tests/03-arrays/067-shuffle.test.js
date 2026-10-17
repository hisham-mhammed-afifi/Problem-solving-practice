import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { shuffle } from '../../problems/03-arrays/067-shuffle.js';

describe('067 shuffle', () => {
  const sorted = (a) => [...a].sort((x, y) => x - y);
  it('shuffle([1, 2, 3, 4, 5]) → the same five numbers, in any order', () => {
    const result = shuffle([1, 2, 3, 4, 5]);
    assert.ok(Array.isArray(result));
    assert.deepEqual(sorted(result), [1, 2, 3, 4, 5]);
  });
  it('shuffle([]) → []', () => assert.deepEqual(shuffle([]), []));
  it('shuffle([7]) → [7]', () => assert.deepEqual(shuffle([7]), [7]));
  it('shuffle([1, 1, 2, 3, 3, 3]) → the same six numbers (duplicates kept)', () => {
    const result = shuffle([1, 1, 2, 3, 3, 3]);
    assert.ok(Array.isArray(result));
    assert.deepEqual(sorted(result), [1, 1, 2, 3, 3, 3]);
  });
  it('returns a new array and leaves the input unchanged', () => {
    const input = [1, 2, 3, 4, 5, 6, 7, 8];
    const result = shuffle(input);
    assert.ok(Array.isArray(result));
    assert.notEqual(result, input);
    assert.deepEqual(input, [1, 2, 3, 4, 5, 6, 7, 8]);
    assert.deepEqual(sorted(result), [1, 2, 3, 4, 5, 6, 7, 8]);
  });
  it('never loses or repeats an element (50 runs)', () => {
    const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    for (let run = 0; run < 50; run++) {
      const result = shuffle(expected);
      assert.ok(Array.isArray(result));
      assert.deepEqual(sorted(result), expected);
    }
  });
});
