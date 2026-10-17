import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { listKeys } from '../../problems/04-objects/071-list-keys.js';

describe('071 list keys', () => {
  it("listKeys({ a: 1, b: 2 }) → ['a', 'b']", () => assert.deepEqual(listKeys({ a: 1, b: 2 }), ['a', 'b']));
  it('listKeys({}) → []', () => assert.deepEqual(listKeys({}), []));
  it("listKeys({ name: 'Ada', age: 36, admin: true }) → ['name', 'age', 'admin']", () => {
    assert.deepEqual(listKeys({ name: 'Ada', age: 36, admin: true }), ['name', 'age', 'admin']);
  });
  it("listKeys({ a: { x: 1, y: 2 } }) → ['a']", () => assert.deepEqual(listKeys({ a: { x: 1, y: 2 } }), ['a']));
});
