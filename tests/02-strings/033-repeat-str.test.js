import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { withForbidden } from '../_helpers/forbid.js';
import { repeatStr } from '../../problems/02-strings/033-repeat-str.js';

describe('033 repeat str', () => {
  it('repeatStr(3, "ab") → "ababab"', () => assert.equal(repeatStr(3, 'ab'), 'ababab'));
  it('repeatStr(0, "ab") → ""', () => assert.equal(repeatStr(0, 'ab'), ''));
  it('repeatStr(1, "x") → "x"', () => assert.equal(repeatStr(1, 'x'), 'x'));
  it('repeatStr(5, "-") → "-----"', () => assert.equal(repeatStr(5, '-'), '-----'));
  it('repeatStr(4, "") → ""', () => assert.equal(repeatStr(4, ''), ''));
  it("rule: don't use String.prototype.repeat", () => {
    const result = withForbidden([[String.prototype, 'repeat']], () => repeatStr(3, 'ab'));
    assert.equal(result, 'ababab');
  });
});
