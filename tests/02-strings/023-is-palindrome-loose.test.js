import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { isPalindromeLoose } from '../../problems/02-strings/023-is-palindrome-loose.js';

describe('023 is palindrome loose', () => {
  it('isPalindromeLoose("Taco cat") → true', () => assert.equal(isPalindromeLoose('Taco cat'), true));
  it('isPalindromeLoose("A man a plan a canal Panama") → true', () => assert.equal(isPalindromeLoose('A man a plan a canal Panama'), true));
  it('isPalindromeLoose("hello world") → false', () => assert.equal(isPalindromeLoose('hello world'), false));
  it('isPalindromeLoose("") → true', () => assert.equal(isPalindromeLoose(''), true));
  it('isPalindromeLoose("a,b a") → false (punctuation still counts)', () => assert.equal(isPalindromeLoose('a,b a'), false));
});
