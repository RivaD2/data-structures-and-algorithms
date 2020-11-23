'use strict';

const findRepeat = str => {
    if(str.length === 1) {
        return false;
    }
    // Object will count frequency of individual values in str
    // I will end up with an object in the end
    let counter = {};
    // Loop over value in str
    for(let i = 0; i < str.length; i++) {
        let letter = str[i];
        if(counter[letter]) {
            counter[letter]++;
        } else {
            counter[letter] = 1;
        }
    }
    return counter;
}
findRepeat("Once upon a time, there was a brave princess who");