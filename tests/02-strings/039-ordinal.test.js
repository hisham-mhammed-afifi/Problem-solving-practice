import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { ordinal } from '../../problems/02-strings/039-ordinal.js';

describe('039 ordinal', () => {
  it('ordinal(1) → "1st"', () => assert.equal(ordinal(1), '1st'));
  it('ordinal(2) → "2nd" and ordinal(3) → "3rd"', () => {
    assert.equal(ordinal(2), '2nd');
    assert.equal(ordinal(3), '3rd');
  });
  it('ordinal(4) → "4th" and ordinal(0) → "0th"', () => {
    assert.equal(ordinal(4), '4th');
    assert.equal(ordinal(0), '0th');
  });
  it('ordinal(11), ordinal(12), ordinal(13) → "11th", "12th", "13th"', () => {
    assert.equal(ordinal(11), '11th');
    assert.equal(ordinal(12), '12th');
    assert.equal(ordinal(13), '13th');
  });
  it('ordinal(22) → "22nd"', () => assert.equal(ordinal(22), '22nd'));
  it('ordinal(101) → "101st" and ordinal(111) → "111th"', () => {
    assert.equal(ordinal(101), '101st');
    assert.equal(ordinal(111), '111th');
  });
});
