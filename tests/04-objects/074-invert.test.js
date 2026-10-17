import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { invert } from '../../problems/04-objects/074-invert.js';

describe('074 invert', () => {
  it("invert({ a: 'x', b: 'y' }) → { x: 'a', y: 'b' }", () => assert.deepEqual(invert({ a: 'x', b: 'y' }), { x: 'a', y: 'b' }));
  it('invert({}) → {}', () => assert.deepEqual(invert({}), {}));
  it("invert({ one: 1, two: 2 }) → { 1: 'one', 2: 'two' }", () => {
    assert.deepEqual(invert({ one: 1, two: 2 }), { 1: 'one', 2: 'two' });
  });
  it("invert({ red: '#f00', green: '#0f0', blue: '#00f' }) → { '#f00': 'red', '#0f0': 'green', '#00f': 'blue' }", () => {
    assert.deepEqual(invert({ red: '#f00', green: '#0f0', blue: '#00f' }), { '#f00': 'red', '#0f0': 'green', '#00f': 'blue' });
  });
  it('does not change the original object', () => {
    const input = { a: 'x', b: 'y' };
    invert(input);
    assert.deepEqual(input, { a: 'x', b: 'y' });
  });
});
