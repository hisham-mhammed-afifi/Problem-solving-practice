import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { productSign } from '../../problems/05-logic-loops/083-product-sign.js';

describe('083 product sign', () => {
  it("productSign(2, 3, 4) → '+'", () => assert.equal(productSign(2, 3, 4), '+'));
  it("productSign(-1, 2, 3) → '-'", () => assert.equal(productSign(-1, 2, 3), '-'));
  it("productSign(-1, -2, 3) → '+'", () => assert.equal(productSign(-1, -2, 3), '+'));
  it("productSign(-1, -2, -3) → '-'", () => assert.equal(productSign(-1, -2, -3), '-'));
  it("productSign(5, 0, -3) → '0'", () => assert.equal(productSign(5, 0, -3), '0'));
  it("productSign(1e-200, 1e-200, 1e-200) → '+' (no multiplying)", () => assert.equal(productSign(1e-200, 1e-200, 1e-200), '+'));
});
