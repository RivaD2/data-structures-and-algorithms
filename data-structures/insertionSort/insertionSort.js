'use strict'

let insertionSort = (arr) => {
    let length = arr.length;
    // Assume first item is current position so I start at first index
    for (let i = 1; i < length; i++) {
        let current = arr[i];
        // Need another loop to look at all previous items
        // If they are greater, they get shifted to right
        let j = i - 1;
        while (j >= 0 && arr[j] > current) {
            // Shift item to right
            // Copy item at index to right side
            arr[j + 1] = arr[j];
            j--
        }
        // Store current item
        arr[j+ 1] = current
    }
    return arr;
};
console.log(insertionSort([0, 15, 3, 18, 10]));
/*
key = arr[1] = 15
sublist = 1-1 = 0; ---------> first iteration
arr[1] = 15
arr = [0, 15, 3, 18, 10];

key = arr[2] = 3
sublist = 2-1 = 1
arr[2] = arr[1] = 15 ----------> second iteration
sublist = 0;
arr[1] = 3
arr = [0, 3, 15, 18, 10]
*/