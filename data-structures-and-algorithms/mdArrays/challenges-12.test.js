'use strict';

/* ------------------------------------------------------------------------------------------------
CHALLENGE 1 - Review

Write a function that finds maximum value in an array
using the 'reduce' method.

E.g. [4,2,7,5,9,2] -> 9
------------------------------------------------------------------------------------------------ */
const maxInArray = (arr) => {
  var maxNum = arr.reduce(function(a, b) {
    return Math.max(a, b);
  });
  return maxNum;
}

/* ------------------------------------------------------------------------------------------------
CHALLENGE 2

You friend Pat has a chain of stores around the greater Seattle area. He specializes in selling salmon cookies. Pat has data for the hourly sales of cookies per hour for each store. He wants to create an array of the total number of cookies sold per hour for all of his stores combined.

Write a function named grandTotal that adds up the cookies sales for each hour of operation for all of the stores combined. For example, the first element in the hourlySales array should be the sum of the cookies sold in the 9:00 a.m. hour at all five stores combined.

For this example, the total at 9:00 a.m. is 17 + 26 + 7 + 5 + 33, or 88 total cookies.

Return the array of the total number of cookies sold per hour for all of the stores combined.
------------------------------------------------------------------------------------------------ */

const hoursOpen = ['9 a.m.', '10 a.m.', '11 a.m.', '12 p.m.', '1 p.m.', '2 p.m.', '3 p.m.', '4 p.m.', '5 p.m.', '6 p.m.', '7 p.m.', '8 p.m.'];

const firstPike = [17, 18, 23, 24, 24, 12, 13, 27, 30, 20, 24, 18];
const seaTac = [26, 5, 5, 59, 23, 39, 38, 20, 30, 7, 59, 43];
const seattleCenter = [7, 14, 19, 22, 15, 4, 23, 27, 28, 23, 1, 29];
const capHill = [5, 85, 58, 51, 50, 13, 33, 32, 47, 94, 31, 62];
const alkiBeach = [33, 31, 147, 130, 27, 93, 38, 126, 141, 63, 46, 17];

const cookieStores = [firstPike, seaTac, seattleCenter, capHill, alkiBeach];

const grandTotal = (stores) => {
 let cookiesPerHour = hoursOpen.map((hoursPerStore, index) => {
   let totals = 0;
      cookieStores.forEach((store)=> {
    totals += store[index]
  });
  return totals;
});
return cookiesPerHour;
}


/* ------------------------------------------------------------------------------------------------
CHALLENGE 3

Pat has decided that he would also like to organize his data as objects containing the number of cookies sold per hour and the time.

Here is sample data for the 9:00 sales: { sales: '88 cookies', time: '9 a.m.' }.

Write a function named salesData that uses forEach to iterate over the hourlySales array and create an object for each hour. Return an array of the formatted data.
------------------------------------------------------------------------------------------------ */

const salesData = (hours, data) => {
  /*
  - created a new array to hold formatted sales data
  - ran through every hour and created new object
  - added string of ' cookies' to value of sales since test wanted string added
  - set sales value to data 
  - data is an array of sales totals which is the same length of hours array
  - setting the index of data says that the hours array matches sales array length
  - since the arrays are the same length, I can loop through one array and get 
      cooresponding value from other array
    */
   let newArray = [ ];
  hours.forEach((hour, index) => {
    let newObject = {
      sales: data[index] + ' cookies',
      time: hour
    };
    newArray.push(newObject);
  }) 
  return newArray;
}

/* ------------------------------------------------------------------------------------------------
CHALLENGE 4

Write a function named howManyTreats that will return the quantity of treats you need to pick up from the pet store today from this array.
------------------------------------------------------------------------------------------------ */

const errands = [
  {
    store: 'Grocery store',
    items: [{ name: 'Eggs', quantity: 12 }, { name: 'Milk', quantity: 1 }, { name: 'Apples', quantity: 3 }]
  },
  {
    store: 'Drug store',
    items: [{ name: 'Toothpaste', quantity: 1 }, { name: 'Toothbrush', quantity: 3 }, { name: 'Mouthwash', quantity: 1 }]
  },
  {
    store: 'Pet store',
    items: [{ name: 'Cans of food', quantity: 8 }, { name: 'Treats', quantity: 24 }, { name: 'Leash', quantity: 1 }]
  }
];

const howManyTreats = (arr) => {
  // Had to create a variable so I can assign a value to it in the forEach
  let arrayOfPetItems;
  /*looping through the array of errands, but errands is an array of object
  with props of store and items
  - I needed to first isolate the Petstore object and only get those items needed*/
  arr.forEach(errand => {
    if(errand.store === 'Pet store') {
      arrayOfPetItems = errand.items;
    }
  });
/*now that I have the items needed from the  Petstore obj, 
I needed to created a var where I can store the quantity 
of treats */
  let treatQuantity = 0;
  /*looped through array of items in petStore object and I'm looking 
   for only the item with the name of 'Treats'
   - Once I have the 'Treats' item, the treatQuanity var is now set
   to  item.quantity of that treats item*/
  arrayOfPetItems.forEach(petListItem => {
    if(petListItem.name === 'Treats') {
        treatQuantity = petListItem.quantity;
    }
  })
  //returned treatQuanity value
  return treatQuantity;
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 5 - Stretch Goal

Write a function named battleship that accepts a 2D array and two numbers: a row coordinate and a column coordinate.

Return "hit" or "miss" depending on if there's part of a boat at that position in the array. Assume the array has only one of two values at each index. '#' for part of a boat, or ' ' for open water.

Here is a sample board:
[
  ['#', ' ', '#', ' '],
  ['#', ' ', '#', ' '],
  ['#', ' ', ' ', ' '],
  [' ', ' ', '#', '#'],
]

The top row of the board is considered row zero and row numbers increase as they go down.
------------------------------------------------------------------------------------------------ */

const battleship = (board, row, col) => {
  //Need value at specific row and column
  // Need to define how to check any position in the 2D array
  let checkPosition = board[row][col];
  //Need to return hit or miss if position I am checking is a hit or miss
  if(checkPosition === '#') {
    return 'hit';
  } else {
    return 'miss';
  }
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 6 - Stretch Goal

Write a function named calculateProduct that takes in a two-dimensional array of numbers, multiplies all of the numbers in each array, and returns the final product. This function should work for any number of inner arrays.

For example, the following input returns a product of 720: [[1,2], [3,4], [5,6]]
------------------------------------------------------------------------------------------------ */
/* arrayNums = [
  [1,2],
  [2,3],
  [4,5]

  ];
*/
const calculateProduct = (numbers) => {
  // step 1: run loop through inner array first to multiply numbers
  // step 2: use reduce to return a single value which is an integer(product of nums);
  function productNums (nums) {
    //return inline or assign to const to return result of reduce
    return nums.reduce((acc, curr) => {
      //multiplying current number in array to the acc as acc is value I take with me.
      //return new value;
      return curr * acc;
    }, 1);
  }
  //need to loop through outer array and call productNums()
  //returning result of reduce immediately since that is the answer I need
  return numbers.reduce((acc, curr) => {
    //curr is an array of nums, I need to multiply all nums
    let multipliedValues = productNums(curr);
    return acc * multipliedValues;
  }, 1)

};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 7 - Stretch Goal

Write a function named averageDailyTemperature that accepts a two-dimensional array representing average daily temperatures grouped week-by-week.

Calculate the average daily temperature during that entire period. Your output should be a single number. Write your function so it could accept an array with any number of weeks given to it.
------------------------------------------------------------------------------------------------ */

// Real daily average temperatures for Seattle, October 1-28 2017
const weeklyTemperatures = [
  [66, 64, 58, 65, 71, 57, 60],
  [57, 65, 65, 70, 72, 65, 51],
  [55, 54, 60, 53, 59, 57, 61],
  [65, 56, 55, 52, 55, 62, 57],
];

const averageDailyTemperature = (weather) => {
  //to find average, I need to iterate through and find average of ONE array
  function findAverage (array) {
    return array.reduce((acc, curr) => {
      return curr + acc;
    }, 0)/ array.length;
  }
  /*
  - Now I need to flatten the weather array so that I can get ONE AVERAGE from ONE ARRAY, flat() will turn the arrays into a single array
  - Not all browsers support flat() so I used concat() and spread operator to the weather array as it is nested
  -  Once I flatten array, I need to  calculate the average by calling findAverage() and passing it the flattenedWeatherArray;
  - I had to assign the function call to a const and then returned the const holding the average
  */
  const flattenedWeatherArray = [].concat(...weather);
   const result = findAverage(flattenedWeatherArray);
   return result;
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 8 - Stretch Goal

Write a function named lowestWeeklyAverage that accepts a two-dimensional array of daily temperatures grouped week-by-week.

Calculate the average temperature for each week and return the value of the lowest weekly average temperature.

For example, in the data set below, the lowest weekly average is 46, which is the average of the temperatures in week 2. All other weeks have average temperatures that are greater than 46.
------------------------------------------------------------------------------------------------ */

let lowestWeeklyTemperatureData = [
  [33, 64, 58, 65, 71, 57, 60],
  [40, 45, 33, 53, 44, 59, 48],
  [55, 54, 60, 53, 59, 57, 61],
  [65, 56, 55, 52, 55, 62, 57],
];
/*
- This challenge will look simlar to the previous challenge
- I need to first create a function that finds the average temp of ONE array
- Once I have the average temp, I need find the average of every given week.
*/

const lowestWeeklyAverage = (weather) => {
  function findAverageLoTemp (array) {
    return array.reduce((acc, curr) => {
      return curr + acc;
    }, 0)/ array.length;
  }

  /*
  - Now that I can find average temp of one week, I need to iterate over each week and findAverageLoTemp using the function I created.
  - I used map so I can creates a new array of the same length but with modified data
  - Inside I the map function, I assign the findAverageLoTemp function(with callback passed in) to a const
  */
const result = weather.map(week => {
  // result is an array of average temps per week
  return findAverageLoTemp(week);
})
/*
 - Now that I have average temps per week, I then have to sort the average temps for each week.
- Sort will by default sort in ascending order, so now that temps are sorted, I know that the first one will be the lowest.
- The lowest temp will be at index 0 in sorted array of lowest average temps
*/
result.sort();
return result[0];
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 9 - Stretch Goal

Write a function called excel that accepts a string representing rows and columns in a table.

Rows are seperated by newline "\n" characters. Columns are seperated by commas. For example, '1,1,1\n4,4,4\n9,9,9' represents a 3x3 table.

The function should parse the string as rows and columns and compute the sum of the values for each row. Return an array with the sum of the values in each row.

For example, excel('1,1,1\n4,4,4\n9,9,9') returns [3, 12, 27].
------------------------------------------------------------------------------------------------ */

const excel = (str) => {
 /*
 - Split will make new array from a string and I need to return an array with the sum of each row
 - I need to split each row and each row is represented by '\n'
 - If I split each row, I will end up with each column as a substring ("1,1,1,", "2, 2, 2" etc. is what I will have)
 - So I will need to split again at each column (marked as ',')
 - I will then have something like this [[1, 1, 1 ], [2, 2, 2 ] ]; (an array of arrays);
 - Use reduce to add up inner arrays and map to turn arrays of arrays into array of sums
 */

//split will turn the string into an array of strings
const splitRows = str.split('\n');

//Array of strings will be turned into array of arrays and I need to split the row into columns
//Split columns will be my outer array
const splitColumns = splitRows.map(row => {
  return row.split(',');
})
//need to use map again to run through outer array of splitColumns
return splitColumns.map(innerArray => {
  return innerArray.reduce((acc, curr) => {
    //the acc is already an integer but the current is an an array of strings, I need to make it an integer
    return acc + parseInt(curr);
  }, 0);

  })

};

/* ------------------------------------------------------------------------------------------------
TESTS

All the code below will verify that your functions are working to solve the challenges.

DO NOT CHANGE any of the below code.

Run your tests from the console: jest challenge-12.test.js

------------------------------------------------------------------------------------------------ */

describe('Testing challenge 1', () => {
  test('It should return the maximum number found', () => {
    expect(maxInArray([4, 2, 7, 5, 9, 2])).toStrictEqual(9);
  });
  test('It should handle negatives and return the maximum number found', () => {
    expect(maxInArray([4, -2, -7, 5, -9, 2])).toStrictEqual(5);
  });
});

describe('Testing challenge 2', () => {
  test('It should add the hourly totals array', () => {
    expect(grandTotal(cookieStores)).toStrictEqual([88, 153, 252, 286, 139, 161, 145, 232, 276, 207, 161, 169]);
  });
});

describe('Testing challenge 3', () => {
  test('It should create an object of data for each store', () => {
    expect(salesData(hoursOpen, grandTotal(cookieStores))).toStrictEqual([
      { sales: '88 cookies', time: '9 a.m.' },
      { sales: '153 cookies', time: '10 a.m.' },
      { sales: '252 cookies', time: '11 a.m.' },
      { sales: '286 cookies', time: '12 p.m.' },
      { sales: '139 cookies', time: '1 p.m.' },
      { sales: '161 cookies', time: '2 p.m.' },
      { sales: '145 cookies', time: '3 p.m.' },
      { sales: '232 cookies', time: '4 p.m.' },
      { sales: '276 cookies', time: '5 p.m.' },
      { sales: '207 cookies', time: '6 p.m.' },
      { sales: '161 cookies', time: '7 p.m.' },
      { sales: '169 cookies', time: '8 p.m.' }
    ]);

    expect(salesData(hoursOpen, grandTotal(cookieStores)).length).toStrictEqual(hoursOpen.length);
  });
});

describe('Testing challenge 4', () => {
  test('It should return the number 24', () => {
    expect(howManyTreats(errands)).toStrictEqual(24);
  });
});

describe('Testing challenge 5', () => {
  const battleshipData = [
    ['#', ' ', '#', ' '],
    ['#', ' ', '#', ' '],
    ['#', ' ', ' ', ' '],
    [' ', ' ', '#', '#'],
  ];

  test('It should return "hit" when it hits a boat', () => {
    expect(battleship(battleshipData, 0, 0)).toStrictEqual('hit');
    expect(battleship(battleshipData, 1, 0)).toStrictEqual('hit');
  });

  test('It should return "miss" when it doesn\'t hit a boat', () => {
    expect(battleship(battleshipData, 0, 1)).toStrictEqual('miss');
    expect(battleship(battleshipData, 3, 0)).toStrictEqual('miss');
  });
});

describe('Testing challenge 6', () => {
  test('It should multiply all the numbers together', () => {
    expect(calculateProduct([[1, 2], [3, 4], [5, 6]])).toStrictEqual(720);
  });

  test('It should return zero if there are any zeroes in the data', () => {
    expect(calculateProduct([[2, 3, 4, 6, 0], [4, 3, 7], [2, 4, 6]])).toStrictEqual(0);
  });
  test('It should work even if some of the arrays contain no numbers', () => {
    expect(calculateProduct([[1, 2], [], [3, 4, 5]])).toStrictEqual(120);
  });
});

describe('Testing challenge 7', () => {
  test('It should calculate and return the average temperature of the data set', () => {
    expect(averageDailyTemperature(weeklyTemperatures)).toStrictEqual(60.25);
  });
});

describe('Testing challenge 8', () => {
  test('It should return the lowest weekly average temperature within the data set', () => {
    expect(lowestWeeklyAverage(weeklyTemperatures)).toStrictEqual(57);
    expect(lowestWeeklyAverage(lowestWeeklyTemperatureData)).toStrictEqual(46);
  });
});

describe('Testing challenge 9', () => {
  test('It should return the total count for each row', () => {
    let result = excel('1,1,1\n4,4,4\n9,9,9');
    expect(result.length).toStrictEqual(3);
    expect(result[0]).toStrictEqual(3);
    expect(result[1]).toStrictEqual(12);
    expect(result[2]).toStrictEqual(27);
  });
});