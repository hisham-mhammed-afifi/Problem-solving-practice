import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { createHelloWorld } from '../../problems/06-functions-closures/089-create-hello-world.js';

describe('089 create hello world', () => {
  it('createHelloWorld()() → "Hello World"', () => {
    const f = createHelloWorld();
    assert.equal(f(), 'Hello World');
  });
  it('called with arguments → "Hello World"', () => {
    const f = createHelloWorld();
    assert.equal(f(1, null, {}), 'Hello World');
  });
  it('called many times → "Hello World" every time', () => {
    const f = createHelloWorld();
    assert.deepEqual([f(), f(), f()], ['Hello World', 'Hello World', 'Hello World']);
  });
});
