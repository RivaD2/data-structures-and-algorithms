'use strict'

let insertionSort = (arr) => {
    let length = arr.length;
    for (let i = 1; i < length; i++) {
        let key = arr[i];
        let sublist = i - 1;
        while (sublist >= 0 && arr[sublist] > key) {
            arr[sublist + 1] = arr[sublist];
            sublist--
        }
        arr[sublist + 1] = key;
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