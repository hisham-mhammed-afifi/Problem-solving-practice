import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { swapCase } from '../../problems/02-strings/034-swap-case.js';

describe('034 swap case', () => {
  it('swapCase("The Quick") → "tHE qUICK"', () => assert.equal(swapCase('The Quick'), 'tHE qUICK'));
  it('swapCase("ABC") → "abc"', () => assert.equal(swapCase('ABC'), 'abc'));
  it('swapCase("abc") → "ABC"', () => assert.equal(swapCase('abc'), 'ABC'));
  it('swapCase("123 abc!") → "123 ABC!"', () => assert.equal(swapCase('123 abc!'), '123 ABC!'));
  it('swapCase("") → ""', () => assert.equal(swapCase(''), ''));
});
