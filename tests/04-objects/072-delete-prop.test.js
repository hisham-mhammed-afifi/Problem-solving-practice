import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { deleteProp } from '../../problems/04-objects/072-delete-prop.js';

describe('072 delete prop', () => {
  it("deleteProp({ a: 1, b: 2 }, 'b') → { a: 1 }", () => assert.deepEqual(deleteProp({ a: 1, b: 2 }, 'b'), { a: 1 }));
  it("deleteProp({ a: 1, b: 2, c: 3 }, 'a') → { b: 2, c: 3 }", () => {
    assert.deepEqual(deleteProp({ a: 1, b: 2, c: 3 }, 'a'), { b: 2, c: 3 });
  });
  it("deleteProp({ a: 1 }, 'a') → {}", () => assert.deepEqual(deleteProp({ a: 1 }, 'a'), {}));
  it("deleteProp({ a: 1 }, 'z') → { a: 1 }", () => assert.deepEqual(deleteProp({ a: 1 }, 'z'), { a: 1 }));
  it('does not change the original object', () => {
    const input = { a: 1, b: 2 };
    deleteProp(input, 'b');
    assert.deepEqual(input, { a: 1, b: 2 });
  });
  it('returns a new object, not the one it was given', () => {
    const input = { a: 1 };
    const result = deleteProp(input, 'z');
    assert.notEqual(result, input);
  });
});
