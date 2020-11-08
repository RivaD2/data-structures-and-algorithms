'use strict';

// to learn more about the cheerio library and what it is doing, look at their documentation: https://www.npmjs.com/package/cheerio
const cheerio = require('cheerio');

/* ------------------------------------------------------------------------------------------------
CHALLENGE 1 - Review

There's a typo in the markup. The Pear is misspelled Perr.
Cheerio is a alternative implementation of jQuery that works on server
Use Cheerio with jQuery syntax to fix the typo
------------------------------------------------------------------------------------------------ */

const $ = createSnippetWithJQuery(`
<ul id="fruits">
  <li class="apple">Apple</li>
  <li class="orange">Orange</li>
  <li class="pear">Perr</li>
</ul>
`);

const fixTheTypo = () => {
  // eq(2) is the 3rd element
  $( "li" ).eq( 2 ).text('Pear');
}

/* ------------------------------------------------------------------------------------------------
CHALLENGE 2

Write a function named firstLetters that takes in an array of strings and returns an array containing only the first letter of each string.

For example, ['this is great :)', 'wow', 'whyyyyyy :(', ':)))))'] returns ['t', 'w', 'w', ':']
------------------------------------------------------------------------------------------------ */

const firstLetters = (arr) => {
  // the first letter of each string is at index[0];
  return arr.map(x => x[0]);
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 3

Write a function named findHappiness that takes in an array of strings and returns an array containing only the strings from the input array that contain ":)".

For example, ['this is great :)', 'wow', 'whyyyyyy :(', ':)))))'] returns ['this is great :)', ':)))))']
------------------------------------------------------------------------------------------------ */

const findHappiness = (arr) => {
  //filtered the array and checks for true or false
  // The include just says, Does the string element include :)? If so, returns true.
  return arr.filter(str => str.includes(':)'));
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 4

Write a function named standardizePhoneNumbers that takes in an array of phone number strings in (XXX) XXX-XXXX format and returns an array with the phone number strings in XXXXXXXXXX format.

For example, (123) 456-7890 returns 1234567890
------------------------------------------------------------------------------------------------ */

const standardizePhoneNumbers = (arr) => {
  return arr.reduce((acc, curr) => {
    //start at 1 and remove 4, start at 6 and remove 9 and start at 10 and remove 14
    const newString = curr.slice(1,4) + curr.slice(6,9) + curr.slice(10, 14);
    acc.push(newString);
    return acc
}, []);
};
/* ------------------------------------------------------------------------------------------------
CHALLENGE 5 - Stretch Goal

Write a function named onlyOddChars that takes in a string and returns only the odd-index characters from that string.

For example, 'abcdefg' returns 'bdf'
------------------------------------------------------------------------------------------------ */

const onlyOddChars = (str) => {
  //split the string into an array and then filtered out odds
  //if the modulus of 2 DOES NOT equal 0, then it is odd and I want those indexes
  //used join to turn array back into string and returned string with odd indexes
  const oddString = str.split('').filter((odds, i) =>
    i % 2 !== 0).join('');
    return oddString;
  };



/* ------------------------------------------------------------------------------------------------
CHALLENGE 6 - Stretch Goal

Write a function named allHappy that takes in an array of strings and returns a Boolean indicating whether all those strings contain ":)".
------------------------------------------------------------------------------------------------ */

const allHappy = (arr) => {
  /*used reduce as it turns array into a single value
    - in this case that value is true or false (a boolean)
    - used includes() to see if curr item DID NOT include the  :)
    - This is easier to check rather than checking to see if all items had :)
    - if the curr item didn't include the :), then return false
    - HOWEVER, once the acc is set to false, I don't want it to set it true again
    - IN other words, once we don't have a smiley, it will NEVER return true
    - returning result of ternary (if left side of ? is true, then it will return
      middle value of true. If left side is false, it will return right-side value of false.)
    */

  const searchStrings = arr.reduce((acc, curr) => {
    if(curr.includes(':)') !== true) {
      return false;
    } else {
      return acc === true ? true : false;
    }
    //set initial value to boolean
  },true);
  return searchStrings;
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 7 - Stretch Goal

Write a function named findAnything that takes in an array of strings, along with a target string. Return an array containing only those strings from the original array that contain the target string.
------------------------------------------------------------------------------------------------ */

const findAnything = (arr, target) => {
  /*filter returns an array
    - looping through array looking for strings that include the target string
    - callback function returns boolean
    -if true is returned, then filter will keep the current item in the array
    - I needed to items that included the target and includes returns true if string
    includes the target
    */
 return arr.filter(str => {
   //includes() will return true if string includes the target
    return str.includes(target);
  });
}

/* ------------------------------------------------------------------------------------------------
CHALLENGE 8 - Stretch Goal

Write a function named findEvery that takes in an array of strings, along with a target string. Return a Boolean based on whether or not every string in the array contains the target string.
------------------------------------------------------------------------------------------------ */

const findEvery = (arr, target) => {
  /* This challenge was the same as challenge 6.
    - Here I just checked to see if every string DIDN'T contain the target string
    */
  const doesEveryContainTargetString = arr.reduce((acc, curr) => {
    if(curr.includes(target) !== true) {
      return false;
    } else {
      return acc === true ? true : false;
    }
    //set initial value to boolean
  },true);
  return doesEveryContainTargetString;
};


/* ------------------------------------------------------------------------------------------------
CHALLENGE 9 - Stretch Goal

We've been testing a new course enrollment system, and we think we have the bugs worked out, but in the meantime, Brook enrolled himself in a bunch of different classes to test if it was working.

Write a function named unenrollBrook that takes in a two-dimensional array, where each array represents one course's roster and is an array of strings of the names of the people in that course.

Return a two-dimensional array with the same roster, but where anyone whose name includes Brook is removed from every course.

For example, [['Brook Testing', 'Actual Person'], ['Human Person', 'Brook again', 'still Brook']] returns [['Actual Person'], ['Human Person']]
------------------------------------------------------------------------------------------------ */

const unenrollBrook = (arr) => {
  /* created a function called filterBrooks
    - this function takes in one arg of roster bec I know that I have a multidimensional
    array with multiple rosters
    - instead of assigning filter() to const, just returned the result from
    the filter directly. Filter looped through the first roster and returned
    true because I said If the roster includes 'Brook' then it is not true;
    - if the value is not true, filter WILL NOT KEEP THE VALUE
    */

  const filterBrooks = (roster) => {
    return roster.filter(name => {
      return name.includes('Brook') !== true;
    })
  }
  /* So, I filtered the first roster, but I still have another roster to cycle
  through and remove all "brooks". Since I created a function 'filterBrooks' I can
  use that here.
    - Map will loop through one array and return a new one based off certain criteria
    - I mapped over the original arr given as i had to return a two-dimensional array
    with the same roster.
    - then I called the filterBrooks function and passed in each item of the array to
    filterBrooks function and it checked to see which values were NOT TRUE.
    - any values that were not true mean that they were brooks and so they
    will not be in the array
    */
  return arr.map(roster => {
    return filterBrooks(roster)
  })
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 10 - Stretch Goal

Write a function named sortByDay that takes in an array of strings, each of which represents an event's day and time.

Return a two-dimensional array that organizes those strings based on the day on which they occur. For example, 
all events on Monday are in the first array, all events on Tuesday are in the second array, etc.

If an event takes place on multiple days (i.e. "Dancing on Mondays and Tuesdays"), it should appear in both arrays.

For example, ['Tuesday', 'Monday', 'Wednesday and Thursday', 'Tuesday 2', 'Thursday'] returns
[
  ['Monday'],
  ['Tuesday', 'Tuesday 2'],
  ['Wednesday and Thursday'],
  ['Wednesday and Thursday', 'Thursday'],
  [],
  [],
  []
]
------------------------------------------------------------------------------------------------ */

const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const sortByDay = (arr) => {
  /*created a function that will filter out the day of the week
    -I am going through the array once for each day*/
  const filterStringArray = (day) => {
    return arr.filter(eventString => {
    /*include will return true or false and if the event matches the day, 
      then it will return true and event  will be added to filterString Array*/
     return eventString.includes(day);
    })
  }
  /*If an event takes place on multiple days, then map will match it on each iteration
      -i.e. first I go through Monday, filter  all 'Mondays', go through Tuesday and filter all 'Tuesdays etc.
      - So if an event takes place on a Monday and Tues, it will be found and put in appropriate array as I am filtering by day
      - return the function and pass in the day as an arg, and it will return all events filtered out for that day
      */
  return daysOfWeek.map(day => {
    return filterStringArray(day);
  })
}

/* ------------------------------------------------------------------------------------------------
CHALLENGE 11 - Stretch Goal

Write a function named characterByIndex that takes in an array of strings and returns an array containing the first character of the first string, the second character of the second string, etc.

For example, ['abcd', 'efgh', 'ijkl', 'mnop'] returns ['a', 'f', 'k', 'p']
------------------------------------------------------------------------------------------------ */

const characterByIndex = (arr) => {
  /* using map() as it loops over an array and will return an array
    - map() in this case will take two args, str, and then index as an index
    has to be specified for substring and also, I want to remove letters at a
    given index
    - substring() takes in the index which is where I want to start the substring
    -  substring() returns a part of the given string from start index to end index.
    - index is the num of the iteration from the map
    - the first item has index one, the second index two, etc.
    */
  const splitStringsAtIndexes = arr.map((str, index) => {
    /*want to take the string and return given string and return
      from the index to one character after the index
      - first iteration, I cut letter from 0-1,
        second iteration, i cut letter 1-2,
        third iteration, I cut letter 2-3*/
    return str.substring(index, index + 1);
  })

  return splitStringsAtIndexes
};

/* ------------------------------------------------------------------------------------------------
TESTS

All the code below will verify that your functions are working to solve the challenges.

DO NOT CHANGE any of the below code.

Run your tests from the console: jest challenges-13.test.js

------------------------------------------------------------------------------------------------ */

describe('Testing challenge 1', () => {
  test('It should return markup with typo fixed', () => {
    fixTheTypo();

    expect($('.pear').text()).toStrictEqual('Pear');
  });
});

describe('Testing challenge 2', () => {
  test('It should return the first letter of each element of the array', () => {
    const words = ['apple', 'banana', 'cantaloupe'];

    expect(firstLetters(words)).toStrictEqual(['a', 'b', 'c']);
    expect(firstLetters(['a', 'b', 'c', 'd'])).toStrictEqual(['a', 'b', 'c', 'd']);
    expect(firstLetters([])).toStrictEqual([]);
  });
});

describe('Testing challenge 3', () => {
  test('It should return only the strings that contain smiley faces', () => {
    const words = ['things', 'apple (:)', ':)banana', 'missing that thing', 'cant:)aloupe'];

    expect(findHappiness(words)).toStrictEqual(['apple (:)', ':)banana', 'cant:)aloupe']);
    expect(findHappiness([])).toStrictEqual([]);
    expect(findHappiness(['sadness'])).toStrictEqual([]);
    expect(findHappiness([':) yay', ':( no', '', '', '', ''])).toStrictEqual([':) yay']);
  });
});

describe('Testing challenge 4', () => {
  test('It should return a standardized set of phone numbers', () => {
    const nums = ['(123) 456-7890', '(222) 222-2222'];

    expect(standardizePhoneNumbers(nums)).toStrictEqual(['1234567890', '2222222222']);
    expect(standardizePhoneNumbers([nums[0]])).toStrictEqual(['1234567890']);
  });
});

describe('Testing challenge 5', () => {
  test('It should only return the odd indexed characters from the string', () => {
    expect(onlyOddChars('0123456789')).toStrictEqual('13579');
    expect(onlyOddChars('abcd')).toStrictEqual('bd');
    expect(onlyOddChars('a')).toStrictEqual('');
    expect(onlyOddChars('')).toStrictEqual('');
  });
});

describe('Testing challenge 6', () => {
  test('It should correctly assess whether all the strings are happy', () => {
    const words = ['things', 'apple (:)', ':)banana', 'missing that thing', 'cant:)aloupe'];

    expect(allHappy(words)).toStrictEqual(false);
    expect(allHappy(['apple (:)', ':)banana', 'cant:)aloupe'])).toStrictEqual(true);
    expect(allHappy([])).toStrictEqual(true);
  });
});

describe('Testing challenge 7', () => {
  test('It should find all the strings that contain a given string', () => {
    const words = ['things', 'apple (:)', ':)banana', 'missing that thing', 'cant:)aloupe'];

    expect(findAnything(words, ':)')).toStrictEqual(findHappiness(words));
    expect(findAnything(words, 'i')).toStrictEqual(['things', 'missing that thing']);
  });
});

describe('Testing challenge 8', () => {
  test('It should determine whether all the strings contain a given string', () => {
    const words = ['things', 'apple pie (:)', ':)banana pie', 'missing that thing', 'cant:)aloupe is tasty'];

    expect(findEvery(words, 'a')).toStrictEqual(false);
    expect(findEvery(words, '')).toStrictEqual(true);
    expect(findEvery(words, 'i')).toStrictEqual(true);
  });
});

describe('Testing challenge 9', () => {
  test('It should remove Brook from all courses', () => {
    const roster = [
      ['Michelle', 'Allie', 'Brook TESTING'],
      ['Brook Riggio', 'hey look it\'s Brook', 'Jennifer'],
      ['Nicholas', 'Sam', 'Scott', 'Vinicio']
    ];

    expect(unenrollBrook(roster)).toStrictEqual([
      ['Michelle', 'Allie'],
      ['Jennifer'],
      ['Nicholas', 'Sam', 'Scott', 'Vinicio']
    ]);
    expect(unenrollBrook([['Brook', 'person'], [], ['person', 'person', 'Brook']])).toStrictEqual([['person'], [], ['person', 'person']]);
    expect(unenrollBrook([])).toStrictEqual([]);
  });
});

describe('Testing challenge 10', () => {
  test('It should sort events by the day on which they happen', () => {
    const events = ['Dancing on Mondays and Tuesdays', 'Meet the inventors! Monday, August 7', 'in the club on a Tuesday', 'Thursday Night Code', 'Saturday Night Fever'];
    const sortedEvents = sortByDay(events);
    expect(sortedEvents[0]).toEqual(expect.arrayContaining(['Dancing on Mondays and Tuesdays', 'Meet the inventors! Monday, August 7']));
    expect(sortedEvents[1]).toEqual(expect.arrayContaining(['Dancing on Mondays and Tuesdays', 'in the club on a Tuesday']));
    expect(sortedEvents[2]).toStrictEqual([]);
    expect(sortedEvents[3]).toStrictEqual(['Thursday Night Code']);
    expect(sortedEvents[4]).toStrictEqual([]);
    expect(sortedEvents[5]).toStrictEqual(['Saturday Night Fever']);
    expect(sortedEvents[6]).toStrictEqual([]);

    const events2 = ['Tuesday', 'Monday', 'Wednesday and Thursday', 'Tuesday 2', 'Thursday'];
    const sortedEvents2 = sortByDay(events2);
    expect(sortedEvents2[0]).toStrictEqual(['Monday']);
    expect(sortedEvents2[1]).toEqual(expect.arrayContaining(['Tuesday', 'Tuesday 2']));
    expect(sortedEvents2[2]).toStrictEqual(['Wednesday and Thursday']);
    expect(sortedEvents2[3]).toEqual(expect.arrayContaining(['Wednesday and Thursday', 'Thursday']));
    expect(sortedEvents2[4]).toStrictEqual([]);
    expect(sortedEvents2[5]).toStrictEqual([]);
    expect(sortedEvents2[6]).toStrictEqual([]);
  });
});

describe('Testing challenge 11', () => {
  test('It should return the ith character of the ith string', () => {
    const words = ['apple', 'banana', 'cantaloupe'];

    expect(characterByIndex(words)).toStrictEqual(['a', 'a', 'n']);
    expect(characterByIndex(['abc', 'def', 'ghi'])).toStrictEqual(['a', 'e', 'i']);
    expect(characterByIndex(['wow', 'wow', 'wow'])).toStrictEqual(['w', 'o', 'w']);
  });
});

function createSnippetWithJQuery(html){
  return cheerio.load(html);
}