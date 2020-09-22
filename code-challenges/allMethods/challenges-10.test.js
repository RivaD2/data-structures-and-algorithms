'use strict';

/* ------------------------------------------------------------------------------------------------
CHALLENGE 1 - Review

Build a simple express server. Connect a '/hello' route that sends a greeting of your choice. Connect a '/aboutme' route that sends a short bio about you to the front-end. Finally, connect a '/favoritefoods' route that sends an array to the front-end of your favorite foods. All other routes should respond with a status of 404.
------------------------------------------------------------------------------------------------ */

const createServer = () => {
  const express = require('express');
  const app = express();


  var server = app.listen(3301, function () {
    app.get('/hello', (req, res) => {
      res.send('Hello');
    });
    app.get('/aboutme', (req, res) => {
      res.send('My name is Riva and I like cats');
    });
    app.get('/favoritefoods', (req, res) => {
      res.send(['green onion pancakes', 'baba ganoush', 'plantain tacos', 'chorizo tacos']);
    });

    var port = server.address().port;
    console.log('Example app listening at port', port);
  });
  return server;
};


/* ------------------------------------------------------------------------------------------------
CHALLENGE 2

Write a function named count that, given an integer and an array of arrays, uses either filter, map, or reduce to count the amount of times the integer is present in the array of arrays.

Note: You might need to use the same method more than once.

For example, count(5, [[1, 3, 5, 7, 9], [5, 5, 5], [1, 2, 3]]) returns 4.
------------------------------------------------------------------------------------------------ */
//input is the array and target is the number
const count = (target, input) => {
  const value = input.reduce((acc, curr) => {
    // the item we are iterating over AT THIS TIME is an arry so curr=array
    // TODO: Count num of times target is in array
    // use array to get the number
    // we have to get the second reduce new arg names
    const targetCount = curr.reduce((result, num) => {
      // if the target (num) === num then add to it to results
      if( num === target) {
        result++;
      }
      return result;
    },0); // set intital value for second reduce function to 0
    return acc + targetCount;
  },0); // set initial val to 0 for first reducer
  return value;
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 3

Write a function that, given an array of integer arrays as input, calculates the total sum of all the elements in the array.

You may want to use filter, map, or reduce for this problem, but are not required to. You may need to use the same method more than once.

For example, [[1, 2, 3, 4, 5], [6, 7, 2, 4, 5, 7], [9, 2, 3, 6,]] returns 66.
------------------------------------------------------------------------------------------------ */
//input's val is an array of arrays(filled with nums)
const totalSum = (input) => {
  // we have one array of arrays
  /*SO, we have BIG bag(acc) and take it to each array(curr)
  - sum of a PARTICULAR array (whichever array we are on at the time)
  - When we get to that array, we need it to be a num, so we make a LITTLE BAG, A SEPARATE BAG.
  - WITH THE LITTLE BAG(result) we go through the array, and add up each number (num), and then put them in the bag.
  - SO, now the LITTLE BAG(result) is a number, and we then PUT IT IN THE BIG BAG(acc)(the first iteration or function).
  - THEN, we take the BIG BAG(acc) to the next array and repeat*/
  return input.reduce((acc, curr) => {
    //item we iterate over is current and current is the array
    //this time, we have to count all nums in arrays
    // we want to the turn the array into a number
    // SO, we take the BIG BAG(acc) and add the LITTLE BAG(result).
    return acc + curr.reduce((result, num) => {
      return result + num;
    },0); //set second reduce function's initial val to 0
  },0); // set first reduce function's initial val to 0
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 4

Write a function named divisibleByFiveTwoToThePower that accepts an array of arrays as input.

This function should first remove any elements that are not numbers or are not divisible by five.

This function should then raise 2 to the power of the resulting numbers, returning an array of arrays.

For example, [ [0,2,5,4], [2,4,10], [] ] should return [ [1, 32], [1024], [] ].
------------------------------------------------------------------------------------------------ */
// input is an array of arrays
const divisibleByFiveTwoToThePower = (input) => {
  //curr is the arrays inside of array
  //curr is an array of nums
  // using map we need to return a val (an array of nums)
  return input.map((curr) => {
    //return at some point
    const newArray = curr.reduce((acc, num) => {
      // if the modulo remainder is zero, then the numbers ARE DIVISIBLE
      // The modulo works for anything that is an object or any strings with letters
      // IF the string is a bunch of digits, then JS will convert it to an integer so I have to check to see if it is a string
      // AND if the type of num is NOT A STRING, then add it to the BIG BAG (acc)
      // If I was using filter, I would reverse my conditional to REMOVE things I don't want rather than adding things I do want
      if( num%5 === 0 && typeof num !== 'string') {
        // pushed numbers that are divisble by 5 as the exponent
        // 2 is the base needed for Math.pow and num is the exponent (2 to the power of)
        acc.push(Math.pow(2, num));
      }
      return acc; //creating the result of the acc here (calling reduce and reduce gives back the result)
    },[]); // set initial val to array bec we need to return an array of nums
    return newArray;
  });
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 5 - Stetch Goal

Write a function named findMaleAndFemale that, given the Star Wars data, below,
returns the names of the characters whose gender is either male or female.

The names should be combined into a single string with each character name separated by "and".

For example, "C-3PO and Luke Skywalker".
------------------------------------------------------------------------------------------------ */

let starWarsData = [{
  name: 'Luke Skywalker',
  height: '172',
  mass: '77',
  hair_color: 'blond',
  skin_color: 'fair',
  eye_color: 'blue',
  birth_year: '19BBY',
  gender: 'male',
},
{
  name: 'C-3PO',
  height: '167',
  mass: '75',
  hair_color: 'n/a',
  skin_color: 'gold',
  eye_color: 'yellow',
  birth_year: '112BBY',
  gender: 'n/a'
},
{
  name: 'R2-D2',
  height: '96',
  mass: '32',
  hair_color: 'n/a',
  skin_color: 'white, blue',
  eye_color: 'red',
  birth_year: '33BBY',
  gender: 'n/a'
},
{
  name: 'Darth Vader',
  height: '202',
  mass: '136',
  hair_color: 'none',
  skin_color: 'white',
  eye_color: 'yellow',
  birth_year: '41.9BBY',
  gender: 'male'
},
{
  name: 'Leia Organa',
  height: '150',
  mass: '49',
  hair_color: 'brown',
  skin_color: 'light',
  eye_color: 'brown',
  birth_year: '19BBY',
  gender: 'female'
}];

let findMaleAndFemale = (data) => {
  //filtered through each object and pulled out genders
  let characterGenders = data.filter(function (people) {
    //if the gender is male or female then add into the array
    if(people.gender === 'male' || people.gender === 'female') {
      return true;
    }
  });
  // took previous array of objects and turned it into array of names
  const names = characterGenders.map((item => {
    //give me all names
    return item.name;
  }));
  // take all the names and join them with 'and'
  return names.join(' and ');
};
/* ------------------------------------------------------------------------------------------------
CHALLENGE 6 - Stretch Goal

Write a function named findShortest that, given the Star Wars data from Challenge 6, uses any combination of filter, map and reduce to return the name of the shortest character.
------------------------------------------------------------------------------------------------ */

let findShortest = (data) => {
  // looping through array and comparing heights between the current object and the shortest person object
  const getCharacterName = data.reduce((acc, curr) => {
    // if the current object height property is less than or equal to the shortest person object so far then return it
    //used parseInt to take string value and give us an integer
    if (parseInt(curr.height) <= parseInt(acc.height)){
      return curr;
    }
    /*if the current object height property is not less than or equal to the shortest person object,
  return to us the shortest person object*/
    else return acc;
  },data[0]);
  // Now that the shortest person object, give us the name property of that object
  return getCharacterName.name;
};

/* ------------------------------------------------------------------------------------------------
TESTS

All the code below will verify that your functions are working to solve the challenges.

DO NOT CHANGE any of the below code.

Run your tests from the console: jest challenges-10.test.js

------------------------------------------------------------------------------------------------ */

describe('Testing challenge 1', () => {

  const request = require('supertest');

  let server;

  beforeAll(function () {
    server = createServer();
  });

  afterAll(function () {
    server.close();
  });

  test('responds to /hello', function testHello(done) {
    request(server)
      .get('/hello')
      .expect(200, done);
  });

  test('responds to /aboutme', function testAboutMe(done) {
    request(server)
      .get('/aboutme')
      .expect(200, done);
  });

  test('responds to /favoritefoods', function testFavoriteFoods(done) {
    request(server)
      .get('/favoritefoods')
      .expect(200, done);
  });

  test('responds to /foo', function testNotFound(done) {
    request(server)
      .get('/foo')
      .expect(404, done);
  });
});

describe('Testing challenge 2', () => {
  test('It should return the number of times the input is in the nested arrays', () => {
    expect(count(5, [[1, 3, 5, 7, 9], [5, 5, 5], [1, 2, 3]])).toStrictEqual(4);
    expect(count(3, [[1, 3, 5, 7, 9], [5, 5, 5], [1, 2, 3]])).toStrictEqual(2);
    expect(count(12, [[1, 3, 5, 7, 9], [5, 5, 5], [1, 2, 3]])).toStrictEqual(0);
  });
  test('It should work on empty arrays', () => {
    expect(count(5, [[1, 3, 5, 7, 9], [], [5, 5, 5], [1, 2, 3], []])).toStrictEqual(4);
    expect(count(5, [])).toStrictEqual(0);
  });
});

describe('Testing challenge 3', () => {
  test('It should add all the numbers in the arrays', () => {
    const nums = [[1, 2, 3, 4, 5], [6, 7, 2, 4, 5, 7], [9, 2, 3, 6,]];

    expect(totalSum(nums)).toStrictEqual(66);
  });
});

describe('Testing challenge 4', () => {
  test('It should return numbers divisible by five, then raise two to the power of the resulting numbers', () => {
    expect(divisibleByFiveTwoToThePower([[10, 20, 5, 4], [5, 6, 7, 9], [1, 10, 3]])).toStrictEqual([[1024, 1048576, 32], [32], [1024]]);
  });

  test('It should return an empty array if none of the numbers are divisible by five', () => {
    expect(divisibleByFiveTwoToThePower([[1, 2, 3], [5, 10, 15]])).toStrictEqual([[], [32, 1024, 32768]]);
  });

  test('It should return an empty array if the values are not numbers', () => {
    expect(divisibleByFiveTwoToThePower([['one', 'two', 'five'], ['5', '10', '15'], [5]])).toStrictEqual([[], [], [32]]);
  });
});

describe('Testing challenge 5', () => {
  test('It should return only characters that are male or female', () => {
    expect(findMaleAndFemale(starWarsData)).toStrictEqual('Luke Skywalker and Darth Vader and Leia Organa');
    expect(findMaleAndFemale([{ name: 'person', gender: 'female' }, { gender: 'lol' }, { name: 'persontwo', gender: 'male' }])).toStrictEqual('person and persontwo');
  });
});

describe('Testing challenge 6', () => {
  test('It should return the name of the shortest character', () => {
    expect(findShortest(starWarsData)).toStrictEqual('R2-D2');
  });
});
