import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { sumMultiplesOf3And5Below } from '../../problems/01-basics-numbers/018-sum-multiples-of-3-and-5-below.js';

describe('018 sum multiples of 3 and 5 below', () => {
  it('sumMultiplesOf3And5Below(1000) → 233168', () => assert.equal(sumMultiplesOf3And5Below(1000), 233168));
  it('sumMultiplesOf3And5Below(10) → 23', () => assert.equal(sumMultiplesOf3And5Below(10), 23));
  it('sumMultiplesOf3And5Below(16) → 60', () => assert.equal(sumMultiplesOf3And5Below(16), 60));
  it('sumMultiplesOf3And5Below(3) → 0', () => assert.equal(sumMultiplesOf3And5Below(3), 0));
  it('sumMultiplesOf3And5Below(0) → 0', () => assert.equal(sumMultiplesOf3And5Below(0), 0));
});
