'use strict';


const insertShiftArray= require('./challenges-02-array-shift.js');

describe('Testing Challenge 02', () => {
    test('Without using built-in methods available to your language, return an array with the new value added at the middle index.', () => {
    let arr = [1, 4, 5, 6,];
        expect(insertShiftArray(arr, 7)).toEqual([1, 4, 7, 5, 6]);
    });
});