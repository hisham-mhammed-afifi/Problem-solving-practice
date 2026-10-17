import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { sortByTitle } from '../../problems/04-objects/078-sort-by-title.js';

describe('078 sort by title', () => {
  it("sortByTitle([{ title: 'b' }, { title: 'a' }]) → a first", () => {
    assert.deepEqual(sortByTitle([{ title: 'b' }, { title: 'a' }]), [{ title: 'a' }, { title: 'b' }]);
  });
  it("sortByTitle([{ title: 'a' }, { title: 'b' }]) → a first", () => {
    assert.deepEqual(sortByTitle([{ title: 'a' }, { title: 'b' }]), [{ title: 'a' }, { title: 'b' }]);
  });
  it('sortByTitle([]) → []', () => assert.deepEqual(sortByTitle([]), []));
  it("sortByTitle(pear, apple, fig) → apple, fig, pear (other properties are kept)", () => {
    const input = [{ title: 'pear', id: 1 }, { title: 'apple', id: 2 }, { title: 'fig', id: 3 }];
    assert.deepEqual(sortByTitle(input), [{ title: 'apple', id: 2 }, { title: 'fig', id: 3 }, { title: 'pear', id: 1 }]);
  });
  it("sortByTitle(apricot, apple) → apple, apricot", () => {
    assert.deepEqual(sortByTitle([{ title: 'apricot' }, { title: 'apple' }]), [{ title: 'apple' }, { title: 'apricot' }]);
  });
  it('does not change the original array', () => {
    const input = [{ title: 'c' }, { title: 'a' }, { title: 'b' }];
    sortByTitle(input);
    assert.deepEqual(input, [{ title: 'c' }, { title: 'a' }, { title: 'b' }]);
  });
});
