import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { withForbidden } from '../_helpers/forbid.js';
import { maxOfThree } from '../../problems/01-basics-numbers/010-max-of-three.js';

describe('010 max of three', () => {
  it('maxOfThree(3, 9, 4) → 9', () => assert.equal(maxOfThree(3, 9, 4), 9));
  it('maxOfThree(10, 2, 5) → 10', () => assert.equal(maxOfThree(10, 2, 5), 10));
  it('maxOfThree(1, 2, 8) → 8', () => assert.equal(maxOfThree(1, 2, 8), 8));
  it('maxOfThree(-1, -5, -3) → -1', () => assert.equal(maxOfThree(-1, -5, -3), -1));
  it('maxOfThree(7, 7, 2) → 7', () => assert.equal(maxOfThree(7, 7, 2), 7));
  it("rule: don't use Math.max", () => {
    const result = withForbidden([[Math, 'max']], () => maxOfThree(1, 3, 2));
    assert.equal(result, 3);
  });
});
