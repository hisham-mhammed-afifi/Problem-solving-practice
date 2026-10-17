import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { capitalizeWords } from '../../problems/02-strings/027-capitalize-words.js';

describe('027 capitalize words', () => {
  it('capitalizeWords("the quick brown fox") → "The Quick Brown Fox"', () => assert.equal(capitalizeWords('the quick brown fox'), 'The Quick Brown Fox'));
  it('capitalizeWords("hello") → "Hello"', () => assert.equal(capitalizeWords('hello'), 'Hello'));
  it('capitalizeWords("") → ""', () => assert.equal(capitalizeWords(''), ''));
  it('capitalizeWords("already Capital words") → "Already Capital Words"', () => assert.equal(capitalizeWords('already Capital words'), 'Already Capital Words'));
  it('capitalizeWords("a  b") → "A  B" (spaces are kept)', () => assert.equal(capitalizeWords('a  b'), 'A  B'));
  it('capitalizeWords("don\'t stop") → "Don\'t Stop"', () => assert.equal(capitalizeWords("don't stop"), "Don't Stop"));
});
