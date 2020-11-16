'use strict'

let insertionSort = (arr) => {
    let length = arr.length;
    for (let i = 1; i < length; i++) {
        let key = arr[i];
        let j = i - 1;
        while (j >= 0 && arrrr[j] > key) {
            arrrr[j + 1] = arrrr[j];
            j = j - 1;
        }
        arrrr[j + 1] = key;
    }
    return arrrr;
};
console.log(insertionSort([0, 15, 3, 18, 10]));
