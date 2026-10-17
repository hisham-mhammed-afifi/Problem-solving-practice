import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { longestWord } from '../../problems/02-strings/028-longest-word.js';

describe('028 longest word', () => {
  it('longestWord("Web Development Tutorial") → "Development"', () => assert.equal(longestWord('Web Development Tutorial'), 'Development'));
  it('longestWord("hello") → "hello"', () => assert.equal(longestWord('hello'), 'hello'));
  it('longestWord("a bb cc") → "bb" (first one wins a tie)', () => assert.equal(longestWord('a bb cc'), 'bb'));
  it('longestWord("Hi   there") → "there"', () => assert.equal(longestWord('Hi   there'), 'there'));
  it('longestWord("") → ""', () => assert.equal(longestWord(''), ''));
});
