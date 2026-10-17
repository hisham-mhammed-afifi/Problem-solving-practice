import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { firstNonRepeated } from '../../problems/02-strings/031-first-non-repeated.js';

describe('031 first non repeated', () => {
  it('firstNonRepeated("abacddbec") → "e"', () => assert.equal(firstNonRepeated('abacddbec'), 'e'));
  it('firstNonRepeated("aabb") → null', () => assert.equal(firstNonRepeated('aabb'), null));
  it('firstNonRepeated("") → null', () => assert.equal(firstNonRepeated(''), null));
  it('firstNonRepeated("a") → "a"', () => assert.equal(firstNonRepeated('a'), 'a'));
  it('firstNonRepeated("aAa") → "A" (case matters)', () => assert.equal(firstNonRepeated('aAa'), 'A'));
});
