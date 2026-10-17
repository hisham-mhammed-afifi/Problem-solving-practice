import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { celsiusToFahrenheit } from '../../problems/01-basics-numbers/005-celsius-to-fahrenheit.js';

describe('005 celsius to fahrenheit', () => {
  it('celsiusToFahrenheit(100) → 212', () => assert.equal(celsiusToFahrenheit(100), 212));
  it('celsiusToFahrenheit(-40) → -40', () => assert.equal(celsiusToFahrenheit(-40), -40));
  it('celsiusToFahrenheit(0) → 32', () => assert.equal(celsiusToFahrenheit(0), 32));
  it('celsiusToFahrenheit(25) → 77', () => assert.equal(celsiusToFahrenheit(25), 77));
  it('celsiusToFahrenheit(10) → 50', () => assert.equal(celsiusToFahrenheit(10), 50));
});
