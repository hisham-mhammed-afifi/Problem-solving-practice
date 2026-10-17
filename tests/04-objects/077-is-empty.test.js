import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { isEmpty } from '../../problems/04-objects/077-is-empty.js';

describe('077 is empty', () => {
  it('isEmpty({}) → true', () => assert.equal(isEmpty({}), true));
  it('isEmpty([]) → true', () => assert.equal(isEmpty([]), true));
  it('isEmpty({ a: 1 }) → false', () => assert.equal(isEmpty({ a: 1 }), false));
  it('isEmpty([1, 2, 3]) → false', () => assert.equal(isEmpty([1, 2, 3]), false));
  it('isEmpty([0]) → false', () => assert.equal(isEmpty([0]), false));
  it('isEmpty({ a: undefined }) → false', () => assert.equal(isEmpty({ a: undefined }), false));
});
