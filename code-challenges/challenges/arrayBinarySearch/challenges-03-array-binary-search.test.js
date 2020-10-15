'use strict';


const binarySearch= require('./challenges-03-array-binary-search.js');

describe('Testing Challenge 03', () => {
    test('Without using built-in methods available to your language, return index of the array’s element that is equal to search key, or -1 if the element does not exist.', () => {
    let sortedArr = [1, 4, 5, 6, 7];
        expect(binarySearch(sortedArr, 7)).toEqual([4]);
    });
});