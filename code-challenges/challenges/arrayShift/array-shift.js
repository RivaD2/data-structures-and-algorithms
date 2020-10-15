'use strict'
/*
My function will pass in the arr and value. 
Inside the function I will set the value the arr.length to 6. 
I will declare a new const that holds the value I want to insert at the specific index [3]. 
I need to return the result. 
*/

let arr = [2, 5, 6, 8, 9];
function insertShiftArray(arr, value) {

    console.log(arr.length);
        let length = arr.length;
        for(i = length/2; i >= value; i--){
            if(i === arr.length/2) {
                arr[length] = arr[i];
                length--;
            };
            arr[value] = value;
            }

}
insertShiftArray([1, 4, 6, 7, 8], 8);
