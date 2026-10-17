import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { slugify } from '../../problems/02-strings/038-slugify.js';

describe('038 slugify', () => {
  it('slugify("Hello World, JS!") → "hello-world-js"', () => assert.equal(slugify('Hello World, JS!'), 'hello-world-js'));
  it('slugify("  Multiple   spaces  ") → "multiple-spaces"', () => assert.equal(slugify('  Multiple   spaces  '), 'multiple-spaces'));
  it('slugify("Top 10 Tips") → "top-10-tips"', () => assert.equal(slugify('Top 10 Tips'), 'top-10-tips'));
  it('slugify("C++ & C#") → "c-c"', () => assert.equal(slugify('C++ & C#'), 'c-c'));
  it('slugify("snake_case name") → "snake-case-name"', () => assert.equal(slugify('snake_case name'), 'snake-case-name'));
  it('slugify("!!!") → ""', () => assert.equal(slugify('!!!'), ''));
});
