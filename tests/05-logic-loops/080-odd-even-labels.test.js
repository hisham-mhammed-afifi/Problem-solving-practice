import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { oddEvenLabels } from '../../problems/05-logic-loops/080-odd-even-labels.js';

describe('080 odd even labels', () => {
  it("oddEvenLabels(3) → ['0 is even', '1 is odd', '2 is even', '3 is odd']", () => {
    assert.deepEqual(oddEvenLabels(3), ['0 is even', '1 is odd', '2 is even', '3 is odd']);
  });
  it("oddEvenLabels(0) → ['0 is even']", () => assert.deepEqual(oddEvenLabels(0), ['0 is even']));
  it("oddEvenLabels(1) → ['0 is even', '1 is odd']", () => assert.deepEqual(oddEvenLabels(1), ['0 is even', '1 is odd']));
  it('oddEvenLabels(15) → 16 items, from 0 is even to 15 is odd', () => {
    const result = oddEvenLabels(15);
    assert.equal(result.length, 16);
    assert.equal(result[0], '0 is even');
    assert.equal(result[14], '14 is even');
    assert.equal(result[15], '15 is odd');
  });
});
