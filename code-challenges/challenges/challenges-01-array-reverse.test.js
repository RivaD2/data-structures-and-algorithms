'use strict';

const reversedArray = require('./challenges-01-array-reverse.js');

describe('Testing Challenge 01', () => {
test('Without using built-in methods available to your language, return an array with elements in reversed order.', () => {
    expect(reversedArray(([0,1, 2, 3, 4, 5], 5)).toStrictEqual('43210'));
  })
});

