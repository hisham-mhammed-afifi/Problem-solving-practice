import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { fizzBuzz } from '../../problems/05-logic-loops/079-fizz-buzz.js';

describe('079 fizz buzz', () => {
  it("fizzBuzz(5) → ['1', '2', 'Fizz', '4', 'Buzz']", () => assert.deepEqual(fizzBuzz(5), ['1', '2', 'Fizz', '4', 'Buzz']));
  it('fizzBuzz(15) → ends with Fizz, 13, 14, FizzBuzz', () => {
    assert.deepEqual(fizzBuzz(15), ['1', '2', 'Fizz', '4', 'Buzz', 'Fizz', '7', '8', 'Fizz', 'Buzz', '11', 'Fizz', '13', '14', 'FizzBuzz']);
  });
  it("fizzBuzz(1) → ['1']", () => assert.deepEqual(fizzBuzz(1), ['1']));
  it('fizzBuzz(0) → []', () => assert.deepEqual(fizzBuzz(0), []));
  it('fizzBuzz(100) → 100 items, item 90 is FizzBuzz, last is Buzz', () => {
    const result = fizzBuzz(100);
    assert.equal(result.length, 100);
    assert.equal(result[89], 'FizzBuzz');
    assert.equal(result[99], 'Buzz');
  });
});
