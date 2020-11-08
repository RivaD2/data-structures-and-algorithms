'use strict';

/*
-My function binarySearch will have two params ( sortedArr, sKey)
-This function should  cut my search in half each time I look for a target value.
- Define the low end of array or start point (has to be index 0)
-Define mid
-(Divide) to see if sKey is greater than or less than the middleIndex or midpoint.
-While loop should run the dividing process to find sKey
- Inside loop, define the middleIndex or midpoint from the element in the middle of the array. To do this
              I need to round up use Math.ceil(sortedArr length/2).
-Define the highest point/index of sortedArr which would be sortedArr.length -1
-In while loop check to see IF sorrtedArray at sKey[mid] is greater than or less than the middleIndex
-If mid < sKey(target value) is less,  sKey will be to right
-Assign our start variable as mid value to chop off the left half of the array and increment mid  by the count of 1
-If the mid > sKey , sKey should be to left.
-Assign our end variable to mid and chop off right of array while decrementing mid by one
- Remove the left or right of our array from our search depending on if sKey is to right or left (Conquer).
- If mid === sKey return sKey
*/


function binarySearch(sortedArr, sKey){
    var start  = 0, end = sortedArr.length -1, mid;
    while (start <= end){
        mid = Math.floor((start + end )/2);
        if( sortedArr[mid] === sKey ) return mid ;
        else if (sortedArr[mid] < sKey) start = mid + 1;
        else end = mid - 1;
    }
    return -1 ;
}
console.log(binarySearch([1, 4, 5, 6, 7], 7));

module.exports = binarySearch;