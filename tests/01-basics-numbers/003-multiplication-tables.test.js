import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { multiplicationTables } from '../../problems/01-basics-numbers/003-multiplication-tables.js';

describe('003 multiplication tables', () => {
  it('multiplicationTables(3) → [[1, 2, 3], [2, 4, 6], [3, 6, 9]]', () =>
    assert.deepEqual(multiplicationTables(3), [[1, 2, 3], [2, 4, 6], [3, 6, 9]]));
  it('multiplicationTables(1) → [[1]]', () => assert.deepEqual(multiplicationTables(1), [[1]]));
  it('multiplicationTables(2) → [[1, 2], [2, 4]]', () => assert.deepEqual(multiplicationTables(2), [[1, 2], [2, 4]]));
  it('multiplicationTables(10) → 10 rows of 10 numbers, ending in 100', () => {
    const result = multiplicationTables(10);
    assert.equal(result.length, 10);
    assert.equal(result.every((row) => row.length === 10), true);
    assert.deepEqual(result[4], [5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);
    assert.equal(result[9][9], 100);
  });
});
