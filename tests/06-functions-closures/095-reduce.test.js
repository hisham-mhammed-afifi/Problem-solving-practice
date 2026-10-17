import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { withForbidden } from '../_helpers/forbid.js';
import { reduce } from '../../problems/06-functions-closures/095-reduce.js';

describe('095 reduce', () => {
  it('reduce([1, 2, 3, 4], (acc, n) => acc + n, 0) → 10', () => {
    assert.equal(reduce([1, 2, 3, 4], (acc, n) => acc + n, 0), 10);
  });
  it('reduce([1, 2, 3], (acc, n) => acc + n * n, 0) → 14', () => {
    assert.equal(reduce([1, 2, 3], (acc, n) => acc + n * n, 0), 14);
  });
  it("reduce([1, 2, 3], (acc, n) => acc + n, '') → '123' (left to right)", () => {
    assert.equal(reduce([1, 2, 3], (acc, n) => acc + n, ''), '123');
  });
  it('reduce([], (acc, n) => acc + n, 25) → 25', () => assert.equal(reduce([], (acc, n) => acc + n, 25), 25));
  it("rule: don't use Array.prototype.reduce / reduceRight", () => {
    const result = withForbidden(
      [
        [Array.prototype, 'reduce'],
        [Array.prototype, 'reduceRight'],
      ],
      () => reduce([1, 2, 3, 4], (acc, n) => acc * n, 1),
    );
    assert.equal(result, 24);
  });
});
