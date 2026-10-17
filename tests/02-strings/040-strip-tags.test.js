import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { stripTags } from '../../problems/02-strings/040-strip-tags.js';

describe('040 strip tags', () => {
  it('stripTags("<p>Hi <b>there</b></p>") → "Hi there"', () => assert.equal(stripTags('<p>Hi <b>there</b></p>'), 'Hi there'));
  it('stripTags("no tags") → "no tags"', () => assert.equal(stripTags('no tags'), 'no tags'));
  it('stripTags("") → ""', () => assert.equal(stripTags(''), ''));
  it('stripTags("<a href=\"https://x.com\">link</a> here") → "link here"', () => assert.equal(stripTags('<a href="https://x.com">link</a> here'), 'link here'));
  it('stripTags("<p>a</p><p>b</p>") → "ab"', () => assert.equal(stripTags('<p>a</p><p>b</p>'), 'ab'));
  it('stripTags("<br>") → ""', () => assert.equal(stripTags('<br>'), ''));
});
