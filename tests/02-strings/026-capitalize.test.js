import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { capitalize } from '../../problems/02-strings/026-capitalize.js';

describe('026 capitalize', () => {
  it('capitalize("javascript") → "Javascript"', () => assert.equal(capitalize('javascript'), 'Javascript'));
  it('capitalize("hello world") → "Hello world"', () => assert.equal(capitalize('hello world'), 'Hello world'));
  it('capitalize("") → ""', () => assert.equal(capitalize(''), ''));
  it('capitalize("a") → "A"', () => assert.equal(capitalize('a'), 'A'));
  it('capitalize("jAVA") → "JAVA" (the rest is untouched)', () => assert.equal(capitalize('jAVA'), 'JAVA'));
});
