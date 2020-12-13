'use strict';

const leftJoin = (hashmap1, hashmap2) => {
    // The final array I will return
    let map1Results = [];
    // Loop through keys in first map (the left) as it was a left join
    for(let key in hashmap1) {
        // Created another arr to hold values(values from each map)
        let arr = [];
        // I know every key in hashmap one will be returned so push all keys
        arr.push(key);
        // I push value corresponding to the key in map1
        arr.push(hashmap1[key]);
        // If a value is undefined, I push null into the results row;
        if(key in hashmap2 === undefined) {
            arr.push(null);
        } else {
            // Otherwise, I push the value of map2 into array 
            arr.push(hashmap2[key]);
         }
         // End result is an arr of arrays so I push arr holding values into resuls arr
        map1Results.push(arr);
    }
    return map1Results;
}