import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { isLeapYear } from '../../problems/01-basics-numbers/013-is-leap-year.js';

describe('013 is leap year', () => {
  it('isLeapYear(2000) → true', () => assert.equal(isLeapYear(2000), true));
  it('isLeapYear(1900) → false', () => assert.equal(isLeapYear(1900), false));
  it('isLeapYear(2024) → true', () => assert.equal(isLeapYear(2024), true));
  it('isLeapYear(2023) → false', () => assert.equal(isLeapYear(2023), false));
  it('isLeapYear(2100) → false', () => assert.equal(isLeapYear(2100), false));
});
