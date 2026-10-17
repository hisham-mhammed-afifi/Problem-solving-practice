import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { charFrequency } from '../../problems/02-strings/030-char-frequency.js';

describe('030 char frequency', () => {
  it('charFrequency("banana") → { b: 1, a: 3, n: 2 }', () => assert.deepEqual(charFrequency('banana'), { b: 1, a: 3, n: 2 }));
  it('charFrequency("") → {}', () => assert.deepEqual(charFrequency(''), {}));
  it('charFrequency("aA") → { a: 1, A: 1 }', () => assert.deepEqual(charFrequency('aA'), { a: 1, A: 1 }));
  it('charFrequency("a b a") → { a: 2, " ": 2, b: 1 }', () => assert.deepEqual(charFrequency('a b a'), { a: 2, ' ': 2, b: 1 }));
});
