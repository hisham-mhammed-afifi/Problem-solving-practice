import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { uniqueChars } from '../../problems/02-strings/032-unique-chars.js';

describe('032 unique chars', () => {
  it('uniqueChars("aabbcd") → "abcd"', () => assert.equal(uniqueChars('aabbcd'), 'abcd'));
  it('uniqueChars("abcabc") → "abc"', () => assert.equal(uniqueChars('abcabc'), 'abc'));
  it('uniqueChars("") → ""', () => assert.equal(uniqueChars(''), ''));
  it('uniqueChars("aAaA") → "aA" (case matters)', () => assert.equal(uniqueChars('aAaA'), 'aA'));
  it('uniqueChars("a b a b") → "a b"', () => assert.equal(uniqueChars('a b a b'), 'a b'));
});
