'use strict'


/*Steps:
Create a const and assign to empty array
Create a const and find midpoint of array using length property/2 and Math.round()
Run a for loop on the arr
	-Inside for loop store values from original array inside
	- As loop runs over each index, each value would be at same index in new array
	- Check if it is at midpoint by checking if [i] ===  midpoint then insert value
	- To insert value, use bracket notation const empty array[i] = value
	- if [i] < midpoint, then empty array[i] = arr[i]
	- if [i] >= midpoint, then empty array[i + 1] =  arr[i]
		-
i= 0 [0, 1, 2, 3], value = 9; ---> loop runs ------> [0, 1, 9, 2, 3];  emptyArray[i] = value
*/

function insertShiftArray(arr, value) {
    const emptyArray = [];
    const midpoint = Math.round(arr.length/2);
    for(let i = 0; i < arr.length; i++) {
        if(i === midpoint) {
            emptyArray[i] = value;
        } else if(i < midpoint) {
            emptyArray[i] = arr[i];
        } else {
           (i >= midpoint)
            emptyArray[i + 1] = arr[i];
        }
    }
    return emptyArray;
}

