'use strict';

const reverseArray = require('./challenges-01-array-reverse.js');

describe('Testing Challenge 01', () => {
test('Without using built-in methods available to your language, return an array with elements in reversed order.', () => {
  let array = [0, 1, 2, 3, 4, 5];
    expect(reverseArray(array)).toEqual([5, 4, 3, 2, 1, 0]);
  });
});

