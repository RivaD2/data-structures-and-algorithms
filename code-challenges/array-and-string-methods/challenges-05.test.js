'use strict';

// to learn more about the cheerio library and what it is doing, look at their documentation: https://www.npmjs.com/package/cheerio
const cheerio = require('cheerio');

/* ------------------------------------------------------------------------------------------------
CHALLENGE 1 - Review

Write a function named templateWithJQuery that uses jQuery to get the html template from the DOM, copy the contents, fill it with the Star Wars People, and append it to the DOM.
------------------------------------------------------------------------------------------------ */
let starWarsPeople = [
  {
    "name": "Luke Skywalker",
    "height": "172",
    "eye_color": "blue"
  },
  {
    "name": "C-3PO",
    "height": "167",
    "eye_color": "yellow"
  },
  {
    "name": "R2-D2",
    "height": "96",
    "eye_color": "red"
  }
];

let $ = createSnippetWithJQuery(`
<main>
  <section id="template">
    <h2></h2>
    <h3></h3>
    <p></p>
  </section>
</main>
`);

const templateWithJQuery = () => {
  starWarsPeople.forEach(person => {
    const template = $('#template').clone();
    template.find($('h2').text(person.name));
    template.find($('h3').text(person.height));
    template.find($('p').text(person.eye_color));
    $('main').append(template);
  });
};

// through star wars people, then clone template, then find different attr forEach person, assign attribute to each of them, then use dot notation to find each element in template
/* ------------------------------------------------------------------------------------------------
CHALLENGE 2

Write a function named howMuchPencil that takes in a string, as written on the side of a pencil.

As you sharpen the pencil, the string will become shorter and shorter, starting by removing the first letter.

Your function should use slice within a loop and return an array of each successive string result from losing letters to the sharpener, until nothing is left.

For example, if the input is 'Welcome', the output will be:
['Welcome', 'elcome', 'lcome', 'come', 'ome', 'me', 'e', ''].
------------------------------------------------------------------------------------------------ */

const howMuchPencil = (str) => {
  let result = [];
  for(let i = 0; i < str.length + 1;i ++) {
    result.push(str.slice(i));
  }
  return result;
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 3

Write a function name wordsToCharList that, given a string as input, returns a new array where every element is a character of the input string.

For example, wordsToCharList('gregor') returns ['g','r','e','g','o','r'].
------------------------------------------------------------------------------------------------ */

const wordsToCharList = (arr) => {
  return arr.split('');
};


/* ------------------------------------------------------------------------------------------------
CHALLENGE 4

You are making a grocery list for ingredients needed in the gruffalo crumble recipe, below. Rather than taking the entire recipe, you only want a list of the item names.

Write a function named listFoods that takes in the recipe and returns a new array of the food items without any amount or units. Just the name. For example, '1 cup flour' will return 'flour'.

Use slice for this function, maybe more than once. The Array.indexOf() method may also be helpful.

Do not use split for this function.
------------------------------------------------------------------------------------------------ */

const gruffaloCrumble = {
  name: 'How to make a Gruffalo Crumble',
  ingredients: [
    '1 medium-sized Gruffalo',
    '8 pounds oats',
    '2 pounds brown sugar',
    '4 pounds flour',
    '2 gallons pure maple syrup',
    '16 cups chopped nuts',
    '1 pound baking soda',
    '1 pound baking powder',
    '1 pound cinnamon',
    '6 gallons melted butter',
    '2 gallons fresh water',
  ],
  steps: [
    'Pre-heat a large oven to 375',
    'De-prickle the gruffalo',
    'Sprinkle with cinnamon, sugar, flour, and nuts',
    'Mix until evenly distributed',
    'Grease a 3-foot x 3-foot casserole dish',
    'Combine gruffalo compote with water to maintain moisture in the oven',
    'Fold together remaining ingredients to make the crisp',
    'Spread the crisp evenly over the gruffalo mixture',
    'Bake for 12-15 hours',
  ]
};


const listFoods = (recipe) => {
  let result = [];
  recipe.ingredients.forEach (str => {
    // indexOfSpace finds first space in string
    let indexOfSpace = str.indexOf(' '); 
    str = str.slice(indexOfSpace + 1); // we find the index and slice it to remove indexes before the space
    indexOfSpace = str.indexOf(' ');
    str = str.slice(indexOfSpace + 1)

    // we slice the same string everytime because of loop and so it will slice until there are no spaces
    // we then push what is left (only one word) into new array
    result.push(str);
  });
  return result;
};


/* ------------------------------------------------------------------------------------------------
CHALLENGE 5 - Stretch Goal

Write a function named splitFoods that uses split to produce the same output as Challenge 3.

You may also use other string or array methods.
------------------------------------------------------------------------------------------------ */

const splitFoods = (recipe) => {
  let result = [];
  recipe.ingredients.forEach (str => {
    str = str.split(' '); // I will have array of all words
    str = str.slice(2);  // now we need to turn array back into string 
    //we will use join() to turn array into strings
    str = str.join(' ');
    result.push(str);
  });
  return result;
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 6 - Stretch Goal

Use the same recipe from Challenge 3, above.

Write a function named stepAction that takes in the recipe and extracts the action verbs from the steps. Fortunate for you, the action verbs are the first word of each action.

Return a new array containing just the verbs. For example, ['Mix until evenly distributed'] returns ['Mix'].
------------------------------------------------------------------------------------------------ */

const stepActions = (recipe) => {
  const extractVerbs = recipe.steps.map(step => {
    // used map because I am taking an array and turning it into another array of same length
    // map makes a new array and as it iterates it will push to the new array whatever the function returns
    //used split to have an array of every word
    const newArray = step.split(' ');
    //returning the first word of this iteration
    return newArray[0];
  });
  return extractVerbs;
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 7 - Stretch Goal

Write a function named removeEvenValues that, given an array of integers as input, deletes all even values from the array, leaving no 'gaps' behind.

The array should be modified in-place.

For example:
  const integers = [1, 2, 3, 4, 5, 6];
  removeEvenValues(integers);
  console.log(integers) will print [1, 3, 5]
------------------------------------------------------------------------------------------------ */

const removeEvenValues = (arr) => {
  //findIndex, while loop and splice to remove elements from an array (splice uses(starting index, elements to be removed, additions))
  // modulo will return a remainder which is 0 for even nums
  // 0 is falsy so I said ==== 0 to make the result true (meaning num is even)
  const isEvenNumber = element => element % 2 === 0;
  let indexOfEven = arr.findIndex(isEvenNumber);
  //go through the loop and find even numbers
  while(indexOfEven !== -1) {
    //once an even number is found, it gets spliced out
    arr.splice(indexOfEven,1);
    //after it is spliced out, we check again to see if there is another even num
    //as long as there is an even number, while loop will run and when they are gone, indexOfEven will become -1 
    //loop stops once -1 is returned as that proves there are no more even numbers to splice
    indexOfEven = arr.findIndex(isEvenNumber);
  }
};


/* ------------------------------------------------------------------------------------------------
CHALLENGE 8 - Stretch Goal

Write a function named removeLastCharacters that takes in a string and a number. The numberOfCharacters argument determines how many characters will be removed from the end of the string. Return the resulting string.

If the numberOfCharacters argument is greater than the length of the input string, the function should return an empty string.

If the numberOfCharacters argument input is a negative number, the function should return the input string without any changes.

For example:
removeLastCharacters('Gregor', 2) returns 'Greg'
removeLastCharacters('Gregor', -2) returns 'Gregor'
removeLastCharacters('Gregor', 9) returns ''
------------------------------------------------------------------------------------------------ */

const removeLastCharacters = (str, numberOfCharacters) => {
  const newString = str.substring(0, 4);
  if(numberOfCharacters >= str.length) {
    return str.substring(0, -0);
  } else if(numberOfCharacters < 0) {
    return str;
  }
  return newString;

};





/* ------------------------------------------------------------------------------------------------
CHALLENGE 9 - Stretch Goal

Write a function named totalSumCSV that, given a string of comma-separated values (CSV) as input. (e.g. "1,2,3"), returns the total sum of the numeric values (e.g. 6).
------------------------------------------------------------------------------------------------ */

const totalSumCSV = (str) => {
  let total = 0;
  var sum = str.split(',').reduce(function(p, c){return p + +c},0);
  return total + sum;
};


/* ------------------------------------------------------------------------------------------------
CHALLENGE 10 - Stretch Goal

Write a function named removeVowels that takes in a string and returns a new string where all the vowels of the original string have been removed.

For example, removeVowels('gregor') returns 'grgr'.
------------------------------------------------------------------------------------------------ */

const removeVowels = (str) => {
  //I decided to make my own method to remove all vowels using the prototype method (for practice)
  String.prototype.removeAllVowels = function() {
    /*using Regex Expression , the pattern is [aeiou] and patterns are always in brackets
      -Flags in Regex are added to specify the parameters of the search pattern. 
      -The g flag says to find all matches within the string (as opposed to just the first)
      -The i flag says to ignore the case of the letters.
      -// 'this' refers to the string and I am saying to replace all the vowels with nothing in this prototype*/
    return this.replace(/[aeiou]+/g, '');
  }
  //Here I apply the new prototype to the str and return the new string
  return str.removeAllVowels();
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 11 - Stretch Goal

Write a function named extractVowels that takes in a string and returns an array where the first element is the original string with all the vowels removed, and the second element is a string of all the vowels that were removed, in alphabetical order.

For example, extractVowels('gregor') returns ['grgr', 'eo'].

Similarly, extractVowels('The quick brown fox') returns ['Th qck brwn fx', 'eioou']
------------------------------------------------------------------------------------------------ */

const extractVowels = (str) => {
  const result = [];
  // removing all vowels from string using Regex expression
  const newString = str.replace(/[aeiou]+/g, '');
  //Using another Regex Expression removes everything that isn't a vowel
  const allVowels = str.replace(/[^aeiou]+/g, '');
  //pushed all letters without vowels into empty array
  result.push(newString);
  //split every character in string so I could sort it  but this made an array
  const sortVowels = allVowels.split('');
  //sorted all vowels in array
  sortVowels.sort();
  //created a new var that held all sorted vowels and used join to make the array a string again
  const finalString = sortVowels.join('');
  //pushed string with vowels removed and sorted alphabetically into the array that now holds newString(letters without vowels)
  result.push(finalString);
  return result;
};

/* ------------------------------------------------------------------------------------------------
TESTS

All the code below will verify that your functions are working to solve the challenges.

DO NOT CHANGE any of the below code.

Run your tests from the console: jest challenges-05.test.js

------------------------------------------------------------------------------------------------ */

describe('Testing challenge 1', () => {
  test('It should append the star wars people to the DOM', () => {
    templateWithJQuery();
    expect($('section:nth-child(2) h2').text()).toStrictEqual('Luke Skywalker');
    expect($('section:nth-child(3) h3').text()).toStrictEqual('167');
    expect($('section:nth-child(4) p').text()).toStrictEqual('red');
  })
});

describe('Testing challenge 2', () => {
  test('It should return a list of shortening words', () => {
    expect(howMuchPencil('Welcome')).toStrictEqual(['Welcome', 'elcome', 'lcome', 'come', 'ome', 'me', 'e', '']);
    expect(howMuchPencil('Welcome').length).toStrictEqual(8);
    expect(howMuchPencil('')).toStrictEqual(['']);
    expect(howMuchPencil('abc')).toStrictEqual(['abc', 'bc', 'c', '']);
  });
});

describe('Testing challenge 3', () => {
  test('It should return an array of individual letters', () => {
    expect(wordsToCharList('Gregor')).toStrictEqual(['G', 'r', 'e', 'g', 'o', 'r']);
    expect(wordsToCharList('Gregor').length).toStrictEqual(6);
    expect(wordsToCharList('hooray')).toStrictEqual(['h', 'o', 'o', 'r', 'a', 'y']);
    expect(wordsToCharList('')).toStrictEqual([]);
  });
});

describe('Testing challenge 4', () => {
  test('It should return a list of foods', () => {
    expect(listFoods(gruffaloCrumble)).toStrictEqual(['Gruffalo', 'oats', 'brown sugar', 'flour', 'pure maple syrup', 'chopped nuts', 'baking soda', 'baking powder', 'cinnamon', 'melted butter', 'fresh water']);
    expect(listFoods(gruffaloCrumble).length).toStrictEqual(11);
  });
});

describe('Testing challenge 5', () => {
  test('It should return a list of foods', () => {
    expect(splitFoods(gruffaloCrumble)).toStrictEqual(['Gruffalo', 'oats', 'brown sugar', 'flour', 'pure maple syrup', 'chopped nuts', 'baking soda', 'baking powder', 'cinnamon', 'melted butter', 'fresh water']);
  });
});

describe('Testing challenge 6', () => {
  test('It should return a list of recipe steps', () => {
    expect(stepActions(gruffaloCrumble)).toStrictEqual(['Pre-heat', 'De-prickle', 'Sprinkle', 'Mix', 'Grease', 'Combine', 'Fold', 'Spread', 'Bake']);
    expect(stepActions(gruffaloCrumble).length).toStrictEqual(9);
  });
});

describe('Testing challenge 7', () => {
  test('It should remove the even numbers from the array', () => {
    let list = [1, 2, 3, 4, 5, 6];
    removeEvenValues(list);
    expect(list).toStrictEqual([1, 3, 5]);

    list = [6, 3, 19, 43, 12, 66, 43];
    removeEvenValues(list);
    expect(list).toStrictEqual([3, 19, 43, 43]);
    expect(list.length).toStrictEqual(4);
  });
});

 describe('Testing challenge 8', () => {
  test('It should shorten the string based on the first argument', () => {
    expect(removeLastCharacters('Gregor', 2)).toStrictEqual('Greg');
    expect(removeLastCharacters('Gregor', 2).length).toStrictEqual(4);
  });
  test('It should return the complete string when passed a negative number', () => {
    expect(removeLastCharacters('hello', -1)).toStrictEqual('hello');
    expect(removeLastCharacters('wowow', -700)).toStrictEqual('wowow');
  });
  test('It should return an empty string when called with a number larger than the string length', () => {
    expect(removeLastCharacters('hello', 12)).toStrictEqual('');
    expect(removeLastCharacters('', 1)).toStrictEqual('');
    expect(removeLastCharacters('a', 1)).toStrictEqual('');
  });
});

describe('Testing challenge 9', () => {
  test('It should add up the numbers contained within the string', () => {
    expect(totalSumCSV('1,4,5,7,2')).toStrictEqual(19);
    expect(totalSumCSV('147')).toStrictEqual(147);
  });
});

describe('Testing challenge 10', () => {
  test('It should return the string without vowels', () => {
    expect(removeVowels('gregor')).toStrictEqual('grgr');
    expect(removeVowels('gregor').length).toStrictEqual(4);
    expect(removeVowels('asdf')).toStrictEqual('sdf');
    expect(removeVowels('why')).toStrictEqual('why');
  });
});

describe('Testing challenge 11', () => {
  test('It should return the string without vowels', () => {
    expect(extractVowels('gregor')).toStrictEqual(['grgr', 'eo']);
    expect(extractVowels('gregor').length).toStrictEqual(2);

    expect(extractVowels('The quick brown fox')).toStrictEqual(['Th qck brwn fx', 'eioou']);
  });
});


function createSnippetWithJQuery(html){
  return cheerio.load(html);
};