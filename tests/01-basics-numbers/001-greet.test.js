import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { greet } from '../../problems/01-basics-numbers/001-greet.js';

describe('001 greet', () => {
  it('greet("Ada") → "Hello, Ada!"', () => assert.equal(greet('Ada'), 'Hello, Ada!'));
  it('greet("World") → "Hello, World!"', () => assert.equal(greet('World'), 'Hello, World!'));
  it('greet("Grace Hopper") → "Hello, Grace Hopper!"', () => assert.equal(greet('Grace Hopper'), 'Hello, Grace Hopper!'));
  it('greet("") → "Hello, !"', () => assert.equal(greet(''), 'Hello, !'));
});
