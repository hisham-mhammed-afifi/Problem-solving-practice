import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { expect } from '../../problems/06-functions-closures/091-expect.js';

describe('091 expect', () => {
  it('expect(5).toBe(5) → true', () => assert.equal(expect(5).toBe(5), true));
  it("expect(5).toBe(null) → throws Error('Not Equal')", () => {
    assert.throws(() => expect(5).toBe(null), (e) => e instanceof Error && e.message === 'Not Equal');
  });
  it("expect(5).toBe('5') → throws Error('Not Equal') (strict ===)", () => {
    assert.throws(() => expect(5).toBe('5'), (e) => e instanceof Error && e.message === 'Not Equal');
  });
  it('expect(5).notToBe(null) → true', () => assert.equal(expect(5).notToBe(null), true));
  it("expect(5).notToBe(5) → throws Error('Equal')", () => {
    assert.throws(() => expect(5).notToBe(5), (e) => e instanceof Error && e.message === 'Equal');
  });
});
