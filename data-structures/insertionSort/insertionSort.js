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
