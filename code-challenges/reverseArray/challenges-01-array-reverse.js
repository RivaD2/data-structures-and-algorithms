'use strict';



let reverseArray = (arr) => {
    for(let i = 0; i < arr.length / 2; i++){
       //Swap the elements
       [arr[i], arr[arr.length - i - 1]] = [arr[arr.length - i - 1], arr[i]];
    }

  return arr;
}