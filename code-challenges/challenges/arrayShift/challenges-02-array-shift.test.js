'use strict';


const insertShiftArray= require('./challenges-02-array-reverse.js');

describe('Testing Challenge 02', () => {
    test('Without using built-in methods available to your language, return an array with the new value added at the middle index.', () => {
    //let array = [0, 1, 2, 3, 4, 5]; change values to make test work
        expect(insertShiftArray(array, value)).toEqual([5, 4, 3, 2, 1, 0]);
    });
});