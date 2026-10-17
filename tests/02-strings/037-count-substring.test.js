import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { countSubstring } from '../../problems/02-strings/037-count-substring.js';

describe('037 count substring', () => {
  it('countSubstring("the cat and the hat", "the") → 2', () => assert.equal(countSubstring('the cat and the hat', 'the'), 2));
  it('countSubstring("hello", "xyz") → 0', () => assert.equal(countSubstring('hello', 'xyz'), 0));
  it('countSubstring("aaaa", "aa") → 2 (no overlapping)', () => assert.equal(countSubstring('aaaa', 'aa'), 2));
  it('countSubstring("The the", "the") → 1 (case matters)', () => assert.equal(countSubstring('The the', 'the'), 1));
  it('countSubstring("", "a") → 0', () => assert.equal(countSubstring('', 'a'), 0));
});
