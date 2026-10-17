import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { rotateRight } from '../../problems/02-strings/044-rotate-right.js';

describe('044 rotate right', () => {
  it('rotateRight("w3resource", 3) → "rcew3resou"', () => assert.equal(rotateRight('w3resource', 3), 'rcew3resou'));
  it('rotateRight("abcde", 0) → "abcde"', () => assert.equal(rotateRight('abcde', 0), 'abcde'));
  it('rotateRight("abcde", 5) → "abcde" (full turn)', () => assert.equal(rotateRight('abcde', 5), 'abcde'));
  it('rotateRight("abcde", 7) → "deabc" (wraps around)', () => assert.equal(rotateRight('abcde', 7), 'deabc'));
  it('rotateRight("", 3) → ""', () => assert.equal(rotateRight('', 3), ''));
});
