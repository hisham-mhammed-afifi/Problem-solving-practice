import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { mostFrequent } from '../../problems/03-arrays/059-most-frequent.js';

describe('059 most frequent', () => {
  it('mostFrequent([3, 1, 3, 2, 1, 3]) → 3', () => assert.equal(mostFrequent([3, 1, 3, 2, 1, 3]), 3));
  it('mostFrequent([7]) → 7', () => assert.equal(mostFrequent([7]), 7));
  it('mostFrequent([1, 2, 2, 3]) → 2', () => assert.equal(mostFrequent([1, 2, 2, 3]), 2));
  it('mostFrequent([5, 1, 1, 5, 5]) → 5', () => assert.equal(mostFrequent([5, 1, 1, 5, 5]), 5));
  it('mostFrequent(["a", "b", "a"]) → "a"', () => assert.equal(mostFrequent(['a', 'b', 'a']), 'a'));
  it('mostFrequent([4, 1, 2, 3, 3, 3, 4, 4, 4]) → 4', () => assert.equal(mostFrequent([4, 1, 2, 3, 3, 3, 4, 4, 4]), 4));
});
