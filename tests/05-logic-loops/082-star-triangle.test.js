import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { starTriangle } from '../../problems/05-logic-loops/082-star-triangle.js';

describe('082 star triangle', () => {
  it("starTriangle(3) → '*\\n**\\n***'", () => assert.equal(starTriangle(3), '*\n**\n***'));
  it("starTriangle(1) → '*'", () => assert.equal(starTriangle(1), '*'));
  it("starTriangle(5) → five rows, 1 to 5 stars", () => assert.equal(starTriangle(5), '*\n**\n***\n****\n*****'));
  it("starTriangle(0) → ''", () => assert.equal(starTriangle(0), ''));
});
