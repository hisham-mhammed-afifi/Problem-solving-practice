import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { sumAndProduct } from '../../problems/03-arrays/058-sum-and-product.js';

describe('058 sum and product', () => {
  it('sumAndProduct([1, 2, 3, 4]) → { sum: 10, product: 24 }', () => assert.deepEqual(sumAndProduct([1, 2, 3, 4]), { sum: 10, product: 24 }));
  it('sumAndProduct([]) → { sum: 0, product: 1 }', () => assert.deepEqual(sumAndProduct([]), { sum: 0, product: 1 }));
  it('sumAndProduct([5]) → { sum: 5, product: 5 }', () => assert.deepEqual(sumAndProduct([5]), { sum: 5, product: 5 }));
  it('sumAndProduct([3, 0, 2]) → { sum: 5, product: 0 }', () => assert.deepEqual(sumAndProduct([3, 0, 2]), { sum: 5, product: 0 }));
  it('sumAndProduct([-2, 3]) → { sum: 1, product: -6 }', () => assert.deepEqual(sumAndProduct([-2, 3]), { sum: 1, product: -6 }));
});
