import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { opposite } from '../../problems/01-basics-numbers/011-opposite.js';

describe('011 opposite', () => {
  it('opposite(14) → -14', () => assert.equal(opposite(14), -14));
  it('opposite(-34) → 34', () => assert.equal(opposite(-34), 34));
  it('opposite(0) → 0 (not -0)', () => assert.equal(opposite(0), 0));
  it('opposite(2.5) → -2.5', () => assert.equal(opposite(2.5), -2.5));
});
