import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { kmToMiles } from '../../problems/01-basics-numbers/004-km-to-miles.js';

describe('004 km to miles', () => {
  it('kmToMiles(10) → 6.21371', () => assert.equal(Math.abs(kmToMiles(10) - 6.21371) < 0.0001, true));
  it('kmToMiles(0) → 0', () => assert.equal(kmToMiles(0), 0));
  it('kmToMiles(1) → 0.621371', () => assert.equal(Math.abs(kmToMiles(1) - 0.621371) < 0.0001, true));
  it('kmToMiles(42.195) → 26.2187', () => assert.equal(Math.abs(kmToMiles(42.195) - 26.2187) < 0.001, true));
});
