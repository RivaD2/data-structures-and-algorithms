'use strict';

const findRepeat = str => {
    if(str.length === 1 || 0) {
        return false;
    }
    // Using object to count frequency of individual values in str
    // Thinking of frequency counter pattern when using this solution
    let counter = {};
    // Loop over values in str
    for(let word of str) {
        // Populate object and if word is already there, return word
        if(counter[word]) {
            return word;
        } else {
            // Intialize here if value is not yet in object
            counter[word] = 1;
        }
    }
    return -1;
}
findRepeat("Once upon a time, there was a brave princess who");