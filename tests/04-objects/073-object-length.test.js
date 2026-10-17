import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { objectLength } from '../../problems/04-objects/073-object-length.js';

describe('073 object length', () => {
  it('objectLength({ a: 1, b: 2, c: 3 }) → 3', () => assert.equal(objectLength({ a: 1, b: 2, c: 3 }), 3));
  it('objectLength({}) → 0', () => assert.equal(objectLength({}), 0));
  it("objectLength({ name: 'Ada' }) → 1", () => assert.equal(objectLength({ name: 'Ada' }), 1));
  it('objectLength({ a: undefined, b: null }) → 2', () => assert.equal(objectLength({ a: undefined, b: null }), 2));
});
