import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { removeFalsy } from '../../problems/03-arrays/063-remove-falsy.js';

describe('063 remove falsy', () => {
  it('removeFalsy([0, 1, false, 2, "", 3, null, NaN]) → [1, 2, 3]', () => assert.deepEqual(removeFalsy([0, 1, false, 2, '', 3, null, NaN]), [1, 2, 3]));
  it('removeFalsy([]) → []', () => assert.deepEqual(removeFalsy([]), []));
  it('removeFalsy([0, "", null, undefined, NaN, false]) → []', () => assert.deepEqual(removeFalsy([0, '', null, undefined, NaN, false]), []));
  it('removeFalsy([1, 2, 3]) → [1, 2, 3]', () => assert.deepEqual(removeFalsy([1, 2, 3]), [1, 2, 3]));
  it('removeFalsy(["0", [], {}, "a", -1]) → ["0", [], {}, "a", -1] (these are truthy)', () => assert.deepEqual(removeFalsy(['0', [], {}, 'a', -1]), ['0', [], {}, 'a', -1]));
  it('leaves the input unchanged', () => {
    const input = [0, 1, null, 2];
    assert.deepEqual(removeFalsy(input), [1, 2]);
    assert.deepEqual(input, [0, 1, null, 2]);
  });
});
