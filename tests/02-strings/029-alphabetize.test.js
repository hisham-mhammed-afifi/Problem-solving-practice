import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { alphabetize } from '../../problems/02-strings/029-alphabetize.js';

describe('029 alphabetize', () => {
  it('alphabetize("webmaster") → "abeemrstw"', () => assert.equal(alphabetize('webmaster'), 'abeemrstw'));
  it('alphabetize("banana") → "aaabnn"', () => assert.equal(alphabetize('banana'), 'aaabnn'));
  it('alphabetize("zyx") → "xyz"', () => assert.equal(alphabetize('zyx'), 'xyz'));
  it('alphabetize("a") → "a"', () => assert.equal(alphabetize('a'), 'a'));
  it('alphabetize("") → ""', () => assert.equal(alphabetize(''), ''));
});
