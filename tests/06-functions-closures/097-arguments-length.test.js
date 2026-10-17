import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { argumentsLength } from '../../problems/06-functions-closures/097-arguments-length.js';

describe('097 arguments length', () => {
  it('argumentsLength(1, 2, 3) → 3', () => assert.equal(argumentsLength(1, 2, 3), 3));
  it('argumentsLength() → 0', () => assert.equal(argumentsLength(), 0));
  it("argumentsLength({}, null, '3') → 3", () => assert.equal(argumentsLength({}, null, '3'), 3));
  it('argumentsLength(undefined, undefined) → 2', () => assert.equal(argumentsLength(undefined, undefined), 2));
  it('argumentsLength([1, 2, 3]) → 1 (an array is one argument)', () => assert.equal(argumentsLength([1, 2, 3]), 1));
});
