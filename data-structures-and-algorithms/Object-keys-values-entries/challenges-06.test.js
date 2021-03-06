'use strict';

// to learn more about the cheerio library and what it is doing, look at their documentation: https://www.npmjs.com/package/cheerio
const cheerio = require('cheerio');
const Mustache = require('mustache');

/* ------------------------------------------------------------------------------------------------

CHALLENGE 1 - Review

Use the characters data below for all of the challenges except challenge 2.

Write a function named templatingWithMustache that uses mustache to create the markup templates for each of the characters. Use the snippet as your guide for creating your templates. Return an array of template strings. Note: this function does not need to actually append the markup to the DOM.

------------------------------------------------------------------------------------------------ */
let characters = [
  {
    name: 'Eddard',
    spouse: 'Catelyn',
    children: ['Robb', 'Sansa', 'Arya', 'Bran', 'Rickon'],
    house: 'Stark'
  },
  {
    name: 'Jon A.',
    spouse: 'Lysa',
    children: ['Robin'],
    house: 'Arryn'
  },
  {
    name: 'Cersei',
    spouse: 'Robert',
    children: ['Joffrey', 'Myrcella', 'Tommen'],
    house: 'Lannister'
  },
  {
    name: 'Daenarys',
    spouse: 'Khal Drogo',
    children: ['Drogon', 'Rhaegal', 'Viserion'],
    house: 'Targaryen'
  },
  {
    name: 'Mace',
    spouse: 'Alerie',
    children: ['Margaery', 'Loras'],
    house: 'Tyrell'
  },
  {
    name: 'Euron',
    spouse: null,
    children: [],
    house: 'Greyjoy'
  },
  {
    name: 'Jon S.',
    spouse: null,
    children: [],
    house: 'Snow'
  }
];

let $ = createSnippetWithJQuery(`
<script id="template" type="x-tmpl-mustache">
<h2>{{ name }}</h2>
<h3>{{ spouse }}</h3>
{{#children}}
* {{.}}
{{/children}}
<p> {{ house }} </p>
</script>
`);

const templatingWithMustache = () => {
  let newArray = [];
  characters.forEach(character => {
    let templateJQuery= $('#template').html();
    newArray.push(Mustache.render(templateJQuery, character));
  });
  return newArray;
};
/* ------------------------------------------------------------------------------------------------
CHALLENGE 2

Write a function named getCourseKeys that takes in the courseInfo object and returns an array containing the keys for the courseInfo object.

For example: (['name', 'duration', 'topics', 'finalExam']).
------------------------------------------------------------------------------------------------ */
const courseInfo = { name: 'Code 301', duration: { dayTrack: '4 weeks', eveningTrack: '8 weeks'},
  topics: ['SMACSS', 'APIs', 'NodeJS', 'SQL', 'jQuery', 'functional programming'],
  finalExam: true
};

const getCourseKeys = (obj) => {
  let arr = Object.keys(courseInfo);
  return arr;
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 3

Write a function named getHouses that returns a new array containing the names of all of the houses in the data set.
------------------------------------------------------------------------------------------------ */

const getHouses = (arr) => {
  let houses = [];
  for(let i =0; i < characters.length;i++) {
    houses.push(arr[i].house);
  }
  return houses;
};
/*------------------------------------------------------------------------------------------------
CHALLENGE 4

Write a function named hasChildrenValues that uses Object.values to determine if any given character in the data set has children.

This function should take in an array of data and a character name and return a Boolean.

For example:
hasChildrenValues(characters, 'Cersei') will return true
hasChildrenValues(characters, 'Sansa') will return false
------------------------------------------------------------------------------------------------ */

const hasChildrenValues = (arr, character) => {
  for( let i of arr) {
    if(i.name === character) {
      if(Object.values(i.children)) {
        return true;
      } else {
        return false;
      }
    }
  }
};


/* ------------------------------------------------------------------------------------------------
CHALLENGE 5 - Stretch Goal

Write a function named hasChildrenEntries that is similar to your hasChildrenValues function from challenge 4, but uses the data's entries instead of its values.

The input and output of this function are the same as the input and output from challenge 3.
------------------------------------------------------------------------------------------------ */

const hasChildrenEntries = (arr, character) => {
  /*set result to false because our function will tell us if character has children
    -because I have several entries to loop through, any entry that is not children
      will return false.
      - if person has children, and it is true, then I have to look at next property
        which means the result would be false again
        -instead, I set result to false at the start, and only set it to true INSIDE function
        -that way, if function sets it to true, the result can never be false again
        */
  let result = false;
  //looping throgh an array of people
  arr.forEach(person => {
    //tring to match character that was passed in to a person obj
    //if the character matches this person's name
    if(person.name === character) {
      //then we pass in the person object and loop through the key value pairs
      //obj.entries will create an array of key value pairs and for each loops through those
      Object.entries(person).forEach(entry => {
        //declaring the entry as a key value pair
        //the first element is the key in the array and the second is the value
        const [key, value] = entry;
        //if the key matches string of children and the value has length
        //, then it is not an empty array
        if (key === 'children' && value.length){
          //therefore, this character has children
          result = true;
        }
      });

    }
  }
  );
  return result;
};
/* ------------------------------------------------------------------------------------------------
CHALLENGE 6 - Stretch Goal

Write a function named totalCharacters that takes in an array and returns the number of characters in the array.
------------------------------------------------------------------------------------------------ */

const totalCharacters = (arr) => {
  const total = arr.reduce((acc, curr) => {
    //reduce will loop through array of people
    //curr is a person obj
    //set count to 1 as I know that that all objects have at least one character (name)
    let count = 1;
    //the next property to loop over is spouse
    //if the current person object's property of spouse is NOT null, then add one
    if(curr.spouse !== null) {
      count++;
    }
    //count contains the characters listed in name prop and spouse prop
    //here I add children prop to name and spouse and use length as each child prop is an array of names.
    //Adding children names using length bec empty arrays will have no length/no name to add
    count = count + curr.children.length;
    /*With reduce I must return the acc + count (the acc only had the intital value of 0 so I had to add the count into the acc bag)*/
    return acc + count;
  },0);
  //I return the total because it is the end of the acc;
  return total;
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 7 - Stretch Goal

Write a function named houseSize that takes in the array of characters and creates an object for each house containing the name of the house and the number of members.

All of these objects should be added to an array named "sizes". Return the "sizes" array from the function.

For example: [{ house: 'Stark', members: 7 }, { house: 'Arryn', members: 3 }, ... ].
------------------------------------------------------------------------------------------------ */

const houseSize = (arr) => {
  const sizes = [];
  arr.forEach(person => {
    /*running forEach over each object and getting the value from house property
      - created a variable and assigned an object to it since I need an obj
      - called the totalCharacters function and passed in an array with person
         because totalCharacters function expects an array
      - HOWEVER, we passed in only one person to get all of the names in the object.
      */
    const obj = {house: person.house , members: totalCharacters([person])};
    sizes.push(obj);
  });
  return sizes;
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 8 - Stretch Goal

As fans are well aware, "When you play the game of thrones, you win or you die. There is no middle ground."

We will assume that Alerie Tyrell is deceased. She missed her daughter's wedding. Twice.

Write a function named houseSurvivors. You may modify your houseSize function from challenge 6 to use as the basis of this function.

This function should create an object for each house containing the name of the house and the number of members. If the spouse is deceased, do not include him/her in the total number of family members.

All of these objects should be added to an array named "survivors". Return the "survivors" array from the function.

For example: [ { house: 'Stark', members: 6 }, { house: 'Arryn', members: 2 }, ... ].
------------------------------------------------------------------------------------------------ */

const deceasedSpouses = ['Catelyn', 'Lysa', 'Robert', 'Khal Drogo', 'Alerie'];

const houseSurvivors = (arr) => {
  const survivors = [];
  //running forEach on each person obj
  arr.forEach(person => {
    //set result to equal an object with a members property and set prop to 0 as members is a count
    const result = {members:0};
    //used object.keys with forEach to loop through all keys in each person obj
    Object.keys(person).forEach(key => {
      //if key in person obj === name, then add that name to the member count
      if(key === 'name') {
        result.members++;
      } //if key === spouse there is more to do
      else if(key === 'spouse') {
        /* person[key] is the value of the spouse prop and if it does not equal null
            and if  index is -1 (this works with indexOf() method) then they ARE NOT DECEASED
            */
        if(person[key] !== null && deceasedSpouses.indexOf(person[key]) === -1) {
          //if spouse is not deceased add them to member count
          result.members++;
        }
      }
      //if key is equal to children, then member count is equal to member count + person[key](children array).length
      //if array is empty, then length is zero but I know that all children props have an array value
      else if(key === 'children') {
        result.members = result.members + person[key].length;
      }
      //if key is equal to house, then add the house prop into result obj
      else if(key === 'house') {
        result.house = person[key];
      }
    });
    //push result into survivors array as it holds the new object and the requested keys and values
    survivors.push(result);
  });
  return survivors;
};

/* ------------------------------------------------------------------------------------------------
TESTS

All the code below will verify that your functions are working to solve the challenges.

DO NOT CHANGE any of the below code.

Run your tests from the console: jest challenges-06.test.js

------------------------------------------------------------------------------------------------ */

describe('Testing challenge 1', () => {
  test('It should return html markup with the character', () => {
    const filledTemplates = templatingWithMustache();
    const $ = cheerio.load(filledTemplates[0]);
    expect($('h2').text()).toStrictEqual('Eddard');
  });
});

describe('Testing challenge 2', () => {
  test('It should return the keys from an object', () => {
    expect(getCourseKeys(courseInfo)).toStrictEqual(['name', 'duration', 'topics', 'finalExam']);
  });
});

describe('Testing challenge 3', () => {
  test('It should return an array of the names of the houses', () => {
    expect(getHouses(characters)).toStrictEqual(['Stark', 'Arryn', 'Lannister', 'Targaryen', 'Tyrell', 'Greyjoy', 'Snow']);
    expect(getHouses(characters).length).toStrictEqual(7);
  });
});

describe('Testing challenge 4', () => {
  test('It should return true for characters that have children', () => {
    expect(hasChildrenValues(characters, 'Daenarys')).toBeTruthy();
  });

  test('It should return false to characters who do not have children', () => {
    expect(hasChildrenValues(characters, 'Sansa')).toBeFalsy();
  });
});

describe('Testing challenge 5', () => {
  test('It should return true for characters that have children', () => {
    expect(hasChildrenEntries(characters, 'Eddard')).toBeTruthy();
  });

  test('It should return false to characters who do not have children', () => {
    expect(hasChildrenEntries(characters, 'Jon S.')).toBeFalsy();
  });
});

describe('Testing challenge 6', () => {
  test('It should return the number of characters in the array', () => {
    expect(totalCharacters(characters)).toStrictEqual(26);
  });
});

describe('Testing challenge 7', () => {
  test('It should return an object for each house containing the name and size', () => {
    expect(houseSize(characters)).toStrictEqual([{ house: 'Stark', members: 7 }, { house: 'Arryn', members: 3 }, { house: 'Lannister', members: 5 }, { house: 'Targaryen', members: 5 }, { house: 'Tyrell', members: 4 }, { house: 'Greyjoy', members: 1 }, { house: 'Snow', members: 1 }]);
    expect(houseSize(characters).length).toStrictEqual(7);
  });
});

describe('Testing challenge 8', () => {
  test('It should not include any deceased spouses', () => {
    expect(houseSurvivors(characters)).toStrictEqual([{ house: 'Stark', members: 6 }, { house: 'Arryn', members: 2 }, { house: 'Lannister', members: 4 }, { house: 'Targaryen', members: 4 }, { house: 'Tyrell', members: 3 }, { house: 'Greyjoy', members: 1 }, { house: 'Snow', members: 1 }]);
  });
});


function createSnippetWithJQuery(html){
  return cheerio.load(html);
}
