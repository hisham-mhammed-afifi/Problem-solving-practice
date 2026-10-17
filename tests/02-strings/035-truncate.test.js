import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { truncate } from '../../problems/02-strings/035-truncate.js';

describe('035 truncate', () => {
  it('truncate("JavaScript", 4, "...") → "Java..."', () => assert.equal(truncate('JavaScript', 4, '...'), 'Java...'));
  it('truncate("Hi", 4, "...") → "Hi"', () => assert.equal(truncate('Hi', 4, '...'), 'Hi'));
  it('truncate("Java", 4, "...") → "Java" (exactly maxLength)', () => assert.equal(truncate('Java', 4, '...'), 'Java'));
  it('truncate("Hello world", 5, "!") → "Hello!"', () => assert.equal(truncate('Hello world', 5, '!'), 'Hello!'));
  it('truncate("abcdef", 3, "") → "abc"', () => assert.equal(truncate('abcdef', 3, ''), 'abc'));
});
