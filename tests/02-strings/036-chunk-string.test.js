import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { chunkString } from '../../problems/02-strings/036-chunk-string.js';

describe('036 chunk string', () => {
  it('chunkString("abcdefg", 3) → ["abc", "def", "g"]', () => assert.deepEqual(chunkString('abcdefg', 3), ['abc', 'def', 'g']));
  it('chunkString("abcd", 2) → ["ab", "cd"]', () => assert.deepEqual(chunkString('abcd', 2), ['ab', 'cd']));
  it('chunkString("abc", 5) → ["abc"]', () => assert.deepEqual(chunkString('abc', 5), ['abc']));
  it('chunkString("abc", 1) → ["a", "b", "c"]', () => assert.deepEqual(chunkString('abc', 1), ['a', 'b', 'c']));
  it('chunkString("", 3) → []', () => assert.deepEqual(chunkString('', 3), []));
});
