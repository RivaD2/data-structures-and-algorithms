'use strict';

/* ------------------------------------------------------------------------------------------------
CHALLENGE 1 - Review

Complete the createServer function to include routes
a GET request to / should respond with status of 200
a DELETE request to /things/1 should respond with status of 405
any other route should return status of 404
------------------------------------------------------------------------------------------------ */
const createServer = () => {
  const express = require('express');
  const app = express();

  app.get('/', (req, res)=> {
    res.send(200);
  });

  app.delete('/things/1', (req, res)=> {
    res.send(405);
  });

  var server = app.listen(3000, function () {
    var port = server.address().port;
    console.log('Example app listening at port', port);
  });
  return server;
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 2

Write a function named toTitleCase that takes in an array of strings and returns an array of strings with the first character in upper case and the rest as is.

For example, ['apple', 'banana', 'MacGyver'] returns ['Apple', 'Banana', 'MacGyver'].
------------------------------------------------------------------------------------------------ */

const toTitleCase = (arr) => {
  //want to use map to turn array into another array
  // Map will give us each string at a time
  // I will need to get the first letter of the string and make it uppercase
  // Once I have the first letter uppercase I gotta slice the new array at index one as index 0 is the capitalLetter
  // Then I can take string of x and add it to newString (which is the missing piece of the string to be added to capital letter)
  const upperCaseLetterArray = arr.map(x => { 
    const firstLetter = x[0].toUpperCase();
    const newString = x.slice(1);
      return firstLetter + newString;
  });
  return upperCaseLetterArray;
};
/* ------------------------------------------------------------------------------------------------
CHALLENGE 3

Write a function named biggerThanLuke that, given the Star Wars data, below, returns the names of the characters whose mass is greater than Luke's.

The names should be combined into a single string with each character name separated by a dash.

For example, "Lando Calrisian - Boba Fett - Princess Amidala".
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
},
{
  name: 'Pex Kylar',
  height: '180',
  mass: '190',
  hair_color: 'orange',
  skin_color: 'brown',
  eye_color: 'none',
  birth_year: '27BBY',
  gender: 'n/a'
}];

let biggerThanLuke = (arr) => {
  //curr is an object in the above array (so a person)
  // Set mass of Luke to undefined because I don't want it is
  //Defined massOfLuke outside of the reduce bec we need it after the function is returned
  let massOfLuke = undefined;
  const arrayOfNames = arr.reduce((acc, curr, index) => {
     //so I am assuming in this case that Luke will always be first item in array
     //index is the position in the array and if Luke is first, then he is always the first index
     //index is a number in the array, index 0 = luke
    if(index === 0) {
      // we set mass of Luke to the mass of the first item in the array
      // have to use parseInt to change the string values into integers otherwise the sort won't work because it sorts strings
      // curr.mass is whoever we are looping over at the time
      massOfLuke = parseInt(curr.mass);
    }
    else if (parseInt(curr.mass) > massOfLuke) {
      //console.log('found Leia', curr.mass);
      //if current person's mass in array is greater than Luke's then I push name of person into array
      acc.push(curr.name);
    }
    //return the accumator first as that is the big bag of people who have a mass greater than Luke
    return acc;
  },[]) // array of names as initial value
  //return the big bag of names and join them all with a dash
  return arrayOfNames.join(' - ');
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 4
Write a function named sortBy that takes in an array of objects, each of which has a particular property, and sorts those objects by that property, lowest to highest, returning the same array.

Here is an example of the input:
[
  {name: 'Sweatshirt', price: 45},
  {name: 'Bookmark', price: 2.50},
  {name: 'Tote bag', price: 15}
];

This data could be sorted by name or price.
------------------------------------------------------------------------------------------------ */

const sortBy = (property, arr) => {
  //use sort and create my own function in this case, it is lowestToHigh
  // Sorty compares any two objects
  // sort takes in a function, in this case it is the lowestToHigh
  // a & b are the objects to be sorted through
  // In this case, we don't know name of property we are accessing so I had to use bracket notation instead
  // The if statement says, if property at object a is > property at object b, then a will come first
  // -1 means the second items goes first
  arr.sort(lowestToHigh);
  function lowestToHigh(a,b) {
    if (a[property] > b[property]) return 1;
    if (b[property] > a[property]) return -1;
     return 0; // this is if property of a and b are the same
  }
  return arr;
};



/* ------------------------------------------------------------------------------------------------
CHALLENGE 5 - Stretch Goal

Write a function that determines if a given URL is secure, beginning with https://

Guard against malformed URLs, such as: https:missing-slashes.bad

For example:
http://www.insecure.com returns false because the URL is not secure
https://secure.com returns true because the URL is secure
https:/missingslash.org returns false because the URL is malformed
------------------------------------------------------------------------------------------------ */
const isSecure = (url) => {
//set valid url to regex expression that matches the secure url
const validUrl = /^(https):\/\/[^ "]+$/.test(url);
//returned validUrl (test checks whether the given url matches the validUrl)
 return validUrl;
}


/* ------------------------------------------------------------------------------------------------
CHALLENGE 6 - Stretch Goal

Write a function named detectTicTacToeWin that accepts a two-dimensional array of strings. Each string is guaranteed to be either "X", "O" or an empty string. Your function should check to see if any row, column, or either diagonal direction has three matching "X" or "O" symbols (non-empty strings), three-in-a-line.

This function should return either true or false to indicate if someone won the game.

Instead of trying to write crazy for loops to automate checking the rows, columns and diagonals consider writing one helper function that accepts three coordinate pairs and checks the values of the array at those locations. For instance helpCheck(row1, col1, row2, col2, row3, col3).

Your function does not need to work for boards of any size other than 3x3.

Here is a sample board:
[
  ['X', '', 'O'],
  ['X', 'O', ''],
  ['X', 'O', 'X'],
];
------------------------------------------------------------------------------------------------ */

const detectTicTacToeWin = (board) => {
  // Solution code here...
};

/* ------------------------------------------------------------------------------------------------
TESTS

All the code below will verify that your functions are working to solve the challenges.

DO NOT CHANGE any of the below code.

Run your tests from the console: jest challenge-14.test.js

------------------------------------------------------------------------------------------------ */

describe('Testing challenge 1', function () {

  const request = require('supertest');

  let server;

  beforeEach(function () {
    server = createServer();
  });

  afterEach(function () {
    server.close();
  });

  test('responds to /', function testSlash(done) {
    request(server)
      .get('/')
      .expect(200, done);
  });

  test('responds to /things/1', function testSlash(done) {
    request(server)
      .delete('/things/1')
      .expect(405, done);
  });

  test('404 everything else', function testPath(done) {
    request(server)
      .get('/foo/bar')
      .expect(404, done);
  });
});

describe('Testing challenge 2', () => {
  test('It should convert each word to title case', () => {
    const words = ['apple', 'banana', 'MacGyver'];
    expect(toTitleCase(words)).toStrictEqual(['Apple', 'Banana', 'MacGyver']);

    expect(toTitleCase([])).toStrictEqual([]);
  });
});

describe('Testing challenge 3', () => {
  test('It should return only characters that are bigger than Luke', () => {
    expect(biggerThanLuke(starWarsData)).toStrictEqual('Darth Vader - Pex Kylar');
    expect(biggerThanLuke([])).toStrictEqual('');
  });
});

describe('Testing challenge 4', () => {
  test('It should sort items by a price', () => {

    expect(sortBy('price', [
      { name: 'Sweatshirt', price: 45 },
      { name: 'Bookmark', price: 2.50 },
      { name: 'Tote bag', price: 15 }
    ])).toStrictEqual([
      { name: 'Bookmark', price: 2.50 },
      { name: 'Tote bag', price: 15 },
      { name: 'Sweatshirt', price: 45 },
    ]);

  });

  test('It should sort items by name', () => {

    expect(sortBy('name', [
      { name: 'Sweatshirt', price: 45 },
      { name: 'Bookmark', price: 2.50 },
      { name: 'Tote bag', price: 15 }
    ])).toStrictEqual([
      { name: 'Bookmark', price: 2.50 },
      { name: 'Sweatshirt', price: 45 },
      { name: 'Tote bag', price: 15 },
    ]);
  });
});

 describe('Testing challenge 5', () => {
  test('It should check if url is https', () => {

    expect(isSecure('http://www.insecure.com')).toBe(false);
    expect(isSecure('https://secure.com')).toBe(true);
    expect(isSecure('https:/missingslash.org')).toBe(false);
  });
});

 describe('Testing challenge 6', () => {
  test('It should return true if there are three in a row', () => {
    expect(detectTicTacToeWin([['X', '', 'O'], ['X', 'O', ''], ['X', 'O', 'X']])).toStrictEqual(true);
    expect(detectTicTacToeWin([['O', '', 'X'], ['X', 'O', 'X'], ['X', '', 'O']])).toStrictEqual(true);
  });

  test('It should return false if there are not three in a row', () => {
    expect(detectTicTacToeWin([['X', '', 'O'], ['O', 'O', ''], ['X', 'O', 'X']])).toStrictEqual(false);
  });

  test('It should not treat empty 3 in row as winner', () => {
    expect(detectTicTacToeWin([['', '', ''], ['O', 'O', ''], ['X', 'O', 'X']])).toEqual(false);
  });
});