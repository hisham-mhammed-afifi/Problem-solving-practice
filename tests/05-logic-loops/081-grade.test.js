import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { grade } from '../../problems/05-logic-loops/081-grade.js';

describe('081 grade', () => {
  it("grade(90) → 'A'", () => assert.equal(grade(90), 'A'));
  it("grade(89.9) → 'B'", () => assert.equal(grade(89.9), 'B'));
  it("grade(80) → 'B'", () => assert.equal(grade(80), 'B'));
  it("grade(72) → 'C'", () => assert.equal(grade(72), 'C'));
  it("grade(60) → 'D'", () => assert.equal(grade(60), 'D'));
  it("grade(59.9) → 'F'", () => assert.equal(grade(59.9), 'F'));
});
