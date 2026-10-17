import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { secondLargest } from '../../problems/03-arrays/056-second-largest.js';

describe('056 second largest', () => {
  it('secondLargest([5, 1, 9, 9, 7]) → 7', () => assert.equal(secondLargest([5, 1, 9, 9, 7]), 7));
  it('secondLargest([-5, -1, -3]) → -3', () => assert.equal(secondLargest([-5, -1, -3]), -3));
  it('secondLargest([1, 2]) → 1', () => assert.equal(secondLargest([1, 2]), 1));
  it('secondLargest([3, 3, 2]) → 2', () => assert.equal(secondLargest([3, 3, 2]), 2));
  it('secondLargest([4, 4, 4]) → undefined', () => assert.equal(secondLargest([4, 4, 4]), undefined));
  it('secondLargest([4]) and secondLargest([]) → undefined', () => {
    assert.equal(secondLargest([4]), undefined);
    assert.equal(secondLargest([]), undefined);
  });
});
