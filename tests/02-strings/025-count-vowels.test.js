import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { countVowels } from '../../problems/02-strings/025-count-vowels.js';

describe('025 count vowels', () => {
  it('countVowels("Hello World") → 3', () => assert.equal(countVowels('Hello World'), 3));
  it('countVowels("") → 0', () => assert.equal(countVowels(''), 0));
  it('countVowels("rhythm") → 0', () => assert.equal(countVowels('rhythm'), 0));
  it('countVowels("AEIOU") → 5', () => assert.equal(countVowels('AEIOU'), 5));
  it('countVowels("sky, why?") → 0', () => assert.equal(countVowels('sky, why?'), 0));
});
