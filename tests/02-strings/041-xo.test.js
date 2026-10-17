import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { xo } from '../../problems/02-strings/041-xo.js';

describe('041 xo', () => {
  it('xo("xxOo") → true', () => assert.equal(xo('xxOo'), true));
  it('xo("xxxo") → false', () => assert.equal(xo('xxxo'), false));
  it('xo("zzz") → true', () => assert.equal(xo('zzz'), true));
  it('xo("xoX") → false (X counts as x)', () => assert.equal(xo('xoX'), false));
  it('xo("") → true', () => assert.equal(xo(''), true));
  it('xo("x, o!") → true', () => assert.equal(xo('x, o!'), true));
});
