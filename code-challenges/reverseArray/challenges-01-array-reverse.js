'use strict';




let reverseArray = (arr, i) => {
    //If the length is 0
    //then return an empty array
    if(i == 0){
       return [];
    }

    //Call the function recursively with one index less and so on.
    return [arr[i - 1]] + (reverseArray(arr, --i));
  }
  console.log(reverseArray([1, 2, 3, 4, 5], 5));