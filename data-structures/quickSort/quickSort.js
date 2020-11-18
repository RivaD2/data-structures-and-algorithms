'use strict';
// Help from stack abuse to solve this recursively! 
const partition = ((arr, left, right) => {
    const pivot = arr[right];
    let pivotIndex = left;
    for(let i = left; i < right; i++) {
        if(arr[i] < pivot) {
            //swap elements here
            [arr[i], arr[pivotIndex]] = [arr[pivot], arr[i]];
            //move to next index/element
            pivotIndex++
        }
    }
    // have to move pivot value to the middle now
    [arr[pivotIndex], arr[right]] = [arr[right], arr[pivotIndex]];
    return pivotIndex;
})

//create another function and use partition logic 

const quickSort = ((arr, left, right) => {
    if(left >= right) {
        return;
    }

    //NOW I have the pivotIndex 
    let index = partition(arr, left, right);
    //apply logic to the left and right subarrays

    quickSort(arr, left, index -1);
    quickSort(arr, index + 1, right);
})

let arr = [4, -10, 7, 22, 10, 19, 20];
quickSort(arr, 0, arr.length -1);
console.log(arr);