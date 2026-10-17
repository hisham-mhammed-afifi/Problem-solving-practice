import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { isNumeric } from '../../problems/02-strings/042-is-numeric.js';

describe('042 is numeric', () => {
  it('isNumeric(" -12.5 ") → true', () => assert.equal(isNumeric(' -12.5 '), true));
  it('isNumeric("12a") → false', () => assert.equal(isNumeric('12a'), false));
  it('isNumeric("42") → true', () => assert.equal(isNumeric('42'), true));
  it('isNumeric("") → false and isNumeric("   ") → false', () => {
    assert.equal(isNumeric(''), false);
    assert.equal(isNumeric('   '), false);
  });
  it('isNumeric("1.2.3") → false', () => assert.equal(isNumeric('1.2.3'), false));
  it('isNumeric("-") → false', () => assert.equal(isNumeric('-'), false));
});
