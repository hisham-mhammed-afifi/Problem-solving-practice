import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { diffFrom13 } from '../../problems/01-basics-numbers/020-diff-from-13.js';

describe('020 diff from 13', () => {
  it('diffFrom13(10) → 3', () => assert.equal(diffFrom13(10), 3));
  it('diffFrom13(20) → 14', () => assert.equal(diffFrom13(20), 14));
  it('diffFrom13(13) → 0', () => assert.equal(diffFrom13(13), 0));
  it('diffFrom13(14) → 2', () => assert.equal(diffFrom13(14), 2));
  it('diffFrom13(0) → 13', () => assert.equal(diffFrom13(0), 13));
  it('diffFrom13(-5) → 18', () => assert.equal(diffFrom13(-5), 18));
});
