import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { createCircle } from '../../problems/04-objects/076-circle.js';

describe('076 circle', () => {
  const close = (actual, expected) => Math.abs(actual - expected) < 1e-9;
  it('createCircle(2).radius → 2', () => assert.equal(createCircle(2).radius, 2));
  it('createCircle(1).area() → 3.14159…', () => assert.ok(close(createCircle(1).area(), Math.PI)));
  it('createCircle(3).area() → 28.27433…', () => assert.ok(close(createCircle(3).area(), 28.274333882308138)));
  it('createCircle(1).perimeter() → 6.28318…', () => assert.ok(close(createCircle(1).perimeter(), 2 * Math.PI)));
  it('createCircle(5).perimeter() → 31.41592…', () => assert.ok(close(createCircle(5).perimeter(), 31.41592653589793)));
  it('createCircle(0) → area() 0 and perimeter() 0', () => {
    const circle = createCircle(0);
    assert.equal(circle.area(), 0);
    assert.equal(circle.perimeter(), 0);
  });
});
