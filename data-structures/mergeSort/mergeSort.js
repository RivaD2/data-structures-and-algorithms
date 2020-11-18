const mergeSort = ((left, right, arr) => {
    let length = arr.length;
    if(length < 2) {
        return arr;
    }
    let mid = Math.floor(length/2);
    //creating left side and right side from middle to end
    left = arr.slice(0, mid);
    right =  arr.slice(mid)
    return merge(mergeSort(left), mergeSort(right));
});

function mergeArrays(left, right) {
    let result = [],
    i = 0;
    j = 0;

    while(i < left.length && j < right.length) {
        if(left[i] < right[j]) {
            result.push(left[i++])
        } else {
            result.push(right[j++]);
        }
        let leftSide = left.slice(i);
        let rightSide = right.slice(i);
        result.push([...leftSide, ...rightSide])
    }
    return result;
}