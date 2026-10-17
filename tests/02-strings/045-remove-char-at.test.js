import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { removeCharAt } from '../../problems/02-strings/045-remove-char-at.js';

describe('045 remove char at', () => {
  it('removeCharAt("hello", 1) → "hllo"', () => assert.equal(removeCharAt('hello', 1), 'hllo'));
  it('removeCharAt("hello", 0) → "ello"', () => assert.equal(removeCharAt('hello', 0), 'ello'));
  it('removeCharAt("hello", 4) → "hell"', () => assert.equal(removeCharAt('hello', 4), 'hell'));
  it('removeCharAt("hello", 10) → "hello" (index too big)', () => assert.equal(removeCharAt('hello', 10), 'hello'));
  it('removeCharAt("hello", -1) → "hello" (negative index)', () => assert.equal(removeCharAt('hello', -1), 'hello'));
});
