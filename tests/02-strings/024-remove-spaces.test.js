import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { removeSpaces } from '../../problems/02-strings/024-remove-spaces.js';

describe('024 remove spaces', () => {
  it('removeSpaces(" a b  c ") → "abc"', () => assert.equal(removeSpaces(' a b  c '), 'abc'));
  it('removeSpaces("abc") → "abc"', () => assert.equal(removeSpaces('abc'), 'abc'));
  it('removeSpaces("   ") → ""', () => assert.equal(removeSpaces('   '), ''));
  it('removeSpaces("Hello, World!") → "Hello,World!"', () => assert.equal(removeSpaces('Hello, World!'), 'Hello,World!'));
});
