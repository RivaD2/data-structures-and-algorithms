'use strict';





function reverseArray (a) {
   var b = [], counter = 0;
   /* - start from the given array's length minus 1 which is equal to the last index of the array);
      [1, 2, 3, 4, 5]; so the length of this array and 5 is last index
      - iterate down to 0 (first index of array of course)
      - use a counter variable to store the values in a temporary array that are taken from the end of the received array
      */

   for (var i = a.length - 1; i >= 0; i--) {
   b[counter] = a[i];
   counter += 1;
   }
   console.log(b);
   return b;

}



  module.exports = reverseArray;