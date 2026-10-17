import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { isPalindrome } from '../../problems/02-strings/022-is-palindrome.js';

describe('022 is palindrome', () => {
  it('isPalindrome("racecar") → true', () => assert.equal(isPalindrome('racecar'), true));
  it('isPalindrome("hello") → false', () => assert.equal(isPalindrome('hello'), false));
  it('isPalindrome("") → true', () => assert.equal(isPalindrome(''), true));
  it('isPalindrome("Racecar") → false (case matters)', () => assert.equal(isPalindrome('Racecar'), false));
  it('isPalindrome("ab ba") → true', () => assert.equal(isPalindrome('ab ba'), true));
  it('isPalindrome("a ba") → false (spaces count)', () => assert.equal(isPalindrome('a ba'), false));
});
