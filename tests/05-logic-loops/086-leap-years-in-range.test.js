import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { leapYearsInRange } from '../../problems/05-logic-loops/086-leap-years-in-range.js';

describe('086 leap years in range', () => {
  it('leapYearsInRange(2000, 2020) → [2000, 2004, 2008, 2012, 2016, 2020]', () => {
    assert.deepEqual(leapYearsInRange(2000, 2020), [2000, 2004, 2008, 2012, 2016, 2020]);
  });
  it('leapYearsInRange(1896, 1904) → [1896, 1904] (1900 is not a leap year)', () => {
    assert.deepEqual(leapYearsInRange(1896, 1904), [1896, 1904]);
  });
  it('leapYearsInRange(2021, 2023) → []', () => assert.deepEqual(leapYearsInRange(2021, 2023), []));
  it('leapYearsInRange(2024, 2024) → [2024]', () => assert.deepEqual(leapYearsInRange(2024, 2024), [2024]));
  it('leapYearsInRange(1900, 1900) → []', () => assert.deepEqual(leapYearsInRange(1900, 1900), []));
  it('leapYearsInRange(1999, 2001) → [2000]', () => assert.deepEqual(leapYearsInRange(1999, 2001), [2000]));
});
