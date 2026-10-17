import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { reverseString } from '../../problems/02-strings/021-reverse-string.js';

describe('021 reverse string', () => {
  it('reverseString("hello") → "olleh"', () => assert.equal(reverseString('hello'), 'olleh'));
  it('reverseString("") → ""', () => assert.equal(reverseString(''), ''));
  it('reverseString("a") → "a"', () => assert.equal(reverseString('a'), 'a'));
  it('reverseString("Hello, World!") → "!dlroW ,olleH"', () => assert.equal(reverseString('Hello, World!'), '!dlroW ,olleH'));
});
