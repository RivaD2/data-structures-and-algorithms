'use strict';

/* ------------------------------------------------------------------------------------------------
CHALLENGE 1 - Review

First, write a function called mapCurrentEvents that maps over the current events object, runs it through a constructor function and returns the resulting array.

The constructor function should be a stand alone function named Events and should have the following keys: 
* author
* categories
* summary
* img_url
* date
* title

Then, write an `/events` route with a callback function called getCurrentEvents.

Next, write a function named getCurrentEvents that takes in the request and response as parameters. This function should call the mapCurrentEvents function and send the result to the front-end.

------------------------------------------------------------------------------------------------ */


// Express sever here
const createServer = () => {
  const express=require('express');
  const app=express();

  app.get('/events',getCurrentEvents);

  var server = app.listen(3301, function () {
    var port = server.address().port;
    console.log('Example app listening at port', port);
  });
  return server;
};

const currentEvents = {
  news: [
    {
      author: "go",
      category: [
        "world"
      ],
      description: "Israel is bracing for more political turmoil with a midnight deadline looming on coalition talks between the country's two most powerful political parties...",
        id: "1eff5f00-ce1e-4de0-922f-1b70299e9fe2",
        image: "https://s.abcnews.com/images/International/WireAP_1a3a822a09ae4b7a98550a530cf88780_16x9_992.jpg",
        language: "en",
        published: "2020-04-13 18:00:33 +0000",
        title: "Israel's coalition talks falter ahead of midnight deadline",
        url: "https://abcnews.go.com/International/wireStory/israels-coalition-talks-falter-ahead-midnight-deadline-70122257"
      },
      {
        author: "@allahpundit",
        category: [
            "politics"
        ],
        description: "Federalism....",
        id: "2bede54d-9df8-4eda-8ea4-5fe166c6b13c",
        image: "https://hotair.com/wp/wp-content/uploads/2020/04/n-6.jpg",
        language: "en",
        published: "2020-04-13 18:00:14 +0000",
        title: "Cuomo: Some northeastern and mid-Atlantic states will be announcing a regional re-opening plan this afternoon",
        url: "https://hotair.com/archives/allahpundit/2020/04/13/cuomo-northeastern-mid-atlantic-states-will-announcing-regional-re-opening-plan-afternoon/"
      },
      {
        author: "Authored by:\n          \n            Daniel Iglesias",
        category: [
            "technology",
            "gadgets"
        ],
        description: "We're back this week with more applications and games out this week. It's up to you to now take advantage and check them out....",
        id: "8572f23a-06e4-4e55-afa0-33f0b43d00d3",
        image: "https://fscl01.fonpit.de/userfiles/6727621/image/2nd_YEAR/Random/Play_store_ANDROIDPIT.jpg",
        language: "en",
        published: "2020-04-13 18:00:13 +0000",
        title: "The best new apps and games launched for Easter | AndroidPIT",
        url: "https://www.androidpit.com/apps-of-the-week-11-04-2020"
      },
      {
        author: "AndroidPIT",
        category: [
            "technology",
            "gadgets"
        ],
        description: "Our winners and losers of the week provide joy and disappointment. Disney+, Microsoft and many more have polarized this week in tech.(This is a preview - click here to read the entire entry.)...",
        id: "671b1ea0-91a4-4f6b-aca3-0b81bec60bc3",
        image: "None",
        language: "en",
        published: "2020-04-13 18:00:13 +0000",
        title: "Winner and loser of the week: spring fever at Disney, long faces at Microsoft",
        url: "https://www.androidpit.com/winner-loser-disney-microsoft"
      },
      {
        author: "wtae",
        category: [
            "general"
        ],
        description: "Amazon plans to hire 75,000 more workers to meet increased demand for household essentials and other goods spurred by the coronavirus....",
        id: "d341119d-2689-422e-ad43-9a5647dad69e",
        image: "https://kubrick.htvapps.com/htv-prod-media.s3.amazonaws.com/images/lead-s098194910-300-1536076653960312366.jpg?crop=1.00xw:0.753xh;0,0.154xh&resize=640:*",
        language: "en",
        published: "2020-04-13 18:00:12 +0000",
        title: "Amazon hiring 75,000 more workers to keep up with demand during coronavirus outbreak",
        url: "https://www.wtae.com/article/amazon-hiring-75000-more-workers-to-keep-up-with-demand-during-coronavirus-outbreak/32129871"
      },
      {
        author: "wtae",
        category: [
            "general"
        ],
        description: "If I can help out those who need it the most, I want to go ahead and do that....",
        id: "7beda240-ce3a-458a-ad83-8ffca0f2512b",
        image: "https://kubrick.htvapps.com/vidthumb/images/stitch-200413-grocery-delivery0-1586797913.jpg?crop=1xw:1xh;center,top&resize=640:*",
        language: "en",
        published: "2020-04-13 18:00:12 +0000",
        title: "Teen starts website to deliver groceries to seniors during coronavirus outbreak",
        url: "https://www.wtae.com/article/teen-starts-website-to-deliver-groceries-to-seniors-during-coronavirus-outbreak/32130620"
      },
      {
        author: "espn",
        category: [
            "sports"
        ],
        description: "Kamara is heading into the final year of his contract, so he could push for a long-term deal. The question is: With his unique role, what is he worth?...",
        id: "b3c211ff-30c8-45a0-9c0a-3895dd2b84a3",
        image: "https://a2.espncdn.com/combiner/i?img=%2Fphoto%2F2019%2F1223%2Fr645131_1296x729_16%2D9.jpg",
        language: "en",
        published: "2020-04-13 18:00:10 +0000",
        title: "Alvin Kamara looms as Saints' next big contract decision",
        url: "https://www.espn.com/blog/new-orleans-saints/post/_/id/33054/alvin-kamara-looms-as-saints-next-big-contract-decision"
      },
      {
        author: "Mike Wehner",
        category: [
            "science"
        ],
        description: "Air pollution on the East Coast of the United States has dropped by as much as 30% according to data from NASA satellites.\nA side-by-side comparison of air pollution levels from 2015-2019 and 2020 rev...",
        id: "eb423ae0-a9c3-4d6e-af7d-c110953d4d63",
        image: "None",
        language: "en",
        published: "2020-04-13 17:59:52 +0000",
        title: "The coronavirus pandemic has cleaned up the air on the East Coast",
        url: "https://bgr.com/2020/04/12/coronavirus-updates-air-pollution-quality-nasa/"
      },
      {
        author: "Mike Wehner",
        category: [
            "science"
        ],
        description: "Science can't decide how effective surgical masks and homemade alternatives are at preventing the spread of coronavirus. \nThe CDC suggests making your own masks at home, but researchers can't say if t...",
        id: "dfc77c05-7446-4a32-85ca-0b2cccd4c779",
        image: "None",
        language: "en",
        published: "2020-04-13 17:59:52 +0000",
        title: "Scientists still can't decide if face masks actually do anything",
        url: "https://bgr.com/2020/04/13/coronavirus-mask-effectiveness-surgical-how-to/"
      }
    ]
}

function getCurrentEvents(request, response){
  response.send(mapCurrentEvents());
}


const mapCurrentEvents = () => {
  return currentEvents.news.map(obj => new Event(obj));
}
function Event(obj) {
   this.author = obj.author;
   this.categories = obj.category;
   this.summary = obj.summary;
   this.img_url = obj.image_url;
   this.language = obj.language;
   this.title = obj.title;
   this.date = obj.published.split(' ', [0]);
}

/* ------------------------------------------------------------------------------------------------
CHALLENGE 2

Write a function named countNumberOfElements that, given an array as input, uses reduce to count the number of elements in the array.

Note: You may not use the array's built-in length property.
------------------------------------------------------------------------------------------------ */

const countNumberOfElements = (arr) => {
  return arr.reduce((indexAtZero) => indexAtZero + 1, 0)
};
/* ------------------------------------------------------------------------------------------------
CHALLENGE 3

Write a function named returnNames that, given the Star Wars data, below, uses reduce to return an array containing the names of the characters.
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
  gender: 'n/a'},
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

const returnNames = (arr) => {
  const subset = arr.reduce(function(acc, curr) {
    // acc is the accumulator or value I am carrying with me on this journey
    // The curr item we are iterating over AT THIS TIME (the item is the object here)
    // This is an array of objects, so curr is ALWAYS one object in the array
    // So, here I am assigning object's name property to const
    // Then we push on the names onto the acc, which was our carried value
    const name = curr.name;
    acc.push(name);
    // I return accumulator because it holds all the object's name properties
    return acc;
   }, [])
   // the initital value is set to empty array because we have to push all values into it
   // if we have a function, i can pass in args separated by commas
   // In this case, the first arg is a function, so we have ENTIRE reduce function then a comma, then the next arg (which is the empty array or initial value)
   return subset;
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 4

Write a function named reversedString that takes in a string and returns a string with the letters in reverse order.

Note: You must use reduce for this challenge. You may not use the built-in .reverse() string method.
------------------------------------------------------------------------------------------------ */
//we have a string and we need to go through letter by letter
//if we have one letter at a time and we are building new str, then we know acc is the str
// when we have our first letter and we get second letter we can just add them together
//ex: 'q', 'riva'---to get 'riva', 'q' I would say, 'riva' + 'q'
const reversedString = (str) => {
  // use split method to turn string into array
  //now I have an array of all the letters in order
  // we pass in an empty str to str.split();
  const splitString = str.split('');
  //console.log(splitString);
  //console.log(str);
  const result = splitString.reduce((acc, curr) => {
  //acc is the value I've built and current is next letter
  // adding the curr and THEN the acc will reverse the string as each next letter is put before previous
  return curr + acc;
  }, '');
  return result;
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 5 - Stretch Goal

Write a function named countNumberOfChildren that, given the array of characters, below, uses reduce to return the total number of children in the data set.
------------------------------------------------------------------------------------------------ */

const characters = [
  {
    name: 'Eddard',
    spouse: 'Catelyn',
    children: ['Robb', 'Sansa', 'Arya', 'Bran', 'Rickon'],
    house: 'Stark',
  },
  {
    name: 'Jon',
    spouse: 'Lysa',
    children: ['Robin'],
    house: 'Arryn',
  },
  {
    name: 'Cersei',
    spouse: 'Robert',
    children: ['Joffrey', 'Myrcella', 'Tommen'],
    house: 'Lannister',
  },
  {
    name: 'Daenarys',
    spouse: 'Khal Drogo',
    children: ['Drogon', 'Rhaegal', 'Viserion'],
    house: 'Targaryen',
  },
  {
    name: 'Mace',
    spouse: 'Alerie',
    children: ['Margaery', 'Loras'],
    house: 'Tyrell',
  },
  {
    name: 'Sansa',
    spouse: 'Tyrion',
    house: 'Stark',
  },
  {
    name: 'Jon',
    spouse: null,
    house: 'Snow',
  },
];

const countNumberOfChildren = (arr) => {
  return arr.reduce((acc, curr) => {
    // Every item in the iteration is an object and we want to access prop of object using dot notation
    //HOWEVER, not every object has prop of CHILDREN
    // SO, we have to use an IF statement to check IF the object HAS property OF children
    // So, CURR is the item from the array we are iterating over AT THIS TIME
    /* Since all of the objects do NOT have property of children, I said, IF the item we are iterating 
    over DOES Have the prop of children, then we add the number of children to accumulator*/
    if(curr.children != undefined) {
      //add accumulator plus the length of children array or num of children
      return acc + curr.children.length;
    };
    //if there is no prop of children of curr, then our acc value does not change
    return acc;
  },0) // initital value is 0
};
  




/* ------------------------------------------------------------------------------------------------
CHALLENGE 6 - Stretch Goal

Write a function that, given an array of numbers as input, uses reduce to calculate the array's average value.

Hint: The accumulator should begin as { count: 0, sum: 0 }
------------------------------------------------------------------------------------------------ */

const calculateAverage = (arr) => {
 /*start with zero and one by one add each value of the array to our initial value until
  we’ve looped through the entire array. When done, the accumulator value will be returned*/
  
  const averageOfValues = arr.reduce((acc,curr) => {
    // Here I said that we will loop through the array of nums and add them all together
    return acc + curr;
  },0)
  //Once I have added them all together and divided them by the total number of numbers (length of the array)
  return averageOfValues/arr.length;
};


/* ------------------------------------------------------------------------------------------------
CHALLENGE 7 - Stretch Goal

Write a function named countPrimeNumbers that, given an array elements as input, uses reduce to count the number of elements that are prime numbers.

You are welcome to use the provided isPrime function.
------------------------------------------------------------------------------------------------ */

const isPrime = (value) => {
  for (let i = 2; i < value; i++) {
    if (value % i === 0) {
      return false;
    }
  }
  return value > 1;
};

const countPrimeNumbers = (arr) => {
 return arr.reduce((acc, curr) => {
    if(isPrime(curr) === true ) {
      acc++
    }
    return acc;
 },0);
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 8 - Stretch Goal

Write a function named extractState that, given the snorlaxData, below, uses reduce to return the object whose 'name' property matches the given string.

If the input array does not have a stat with that specific name, the function should return null.
------------------------------------------------------------------------------------------------ */

const snorlaxData = {
  stats: [
    {
      stat: {
        url: 'https://pokeapi.co/api/v2/stat/6/',
        name: 'speed',
      },
      effort: 5,
      baseStat: 30,
    },
    {
      stat: {
        url: 'https://pokeapi.co/api/v2/stat/5/',
        name: 'special-defense',
      },
      effort: 2,
      baseStat: 110,
    },
    {
      stat: {
        url: 'https://pokeapi.co/api/v2/stat/4/',
        name: 'special-attack',
      },
      effort: 9,
      baseStat: 65,
    },
  ],
  name: 'snorlax',
  weight: 4600,
};

const extractStat = (statName, arr) => {
  /* - use reduce to loop through the arr of objects that will possibly have a name property
    - The name property will be on the stat object
    - If the current item's name prop matches the string value of statName, then return the curr object.
    - If the current object's name property doesn't match the statName, then return acc because acc is
      null by default due to initial value
   */
 return arr.reduce((acc, curr) => {
   if(curr.stat.name === statName){
     return curr;
   } else {
     return acc;
   }
   //the initial value is null because if none of the names match, we want to return null
   //if the acc is empty, then return null
 }, null)
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 9 - Stretch Goal

Write a function named extractChildren that, given the array of characters from challenge 4, accomplishes the following:

1) Uses filter to return an array of the characters that contain the letter 'a' in their name

2) Then, uses reduce to return an array of all the children's names in the filtered array
------------------------------------------------------------------------------------------------ */

const extractChildren = (arr) => {
  //First I need to use filter() to get all characters that have an a in their name
  // Filter will make a smaller array and often returns true or false depending on given criteria
  // In this case, filter will run through all characters and return those that have an a (using the includes() method);
const charactersWithLetterA = arr.filter(characters => {
    return characters.name.includes('a');
  })

  /*Now that I have all characters containing a's in their name, I have to use reduce() to get all childrens names
   - reduce will have two params, one of which is the current item being iterated over and the return value
   - I have to use if statement to say, if curr item has curr.children, then add the children to the
   return value that I carry with me through each iteration(the acc).
   - Use spread operator to add two arrays together
   - then else says that if curr item doesn't have a children prop, then just return what we have already(the acc);
   */
  return charactersWithLetterA.reduce((acc, curr) => {
    if(curr.children){
      return [...acc, ...curr.children];
    } else {
      return acc;
    }
  },[]);
}



/* ------------------------------------------------------------------------------------------------
TESTS

All the code below will verify that your functions are working to solve the challenges.

DO NOT CHANGE any of the below code.

Run your tests from the console: jest challenges-09.test.js
------------------------------------------------------------------------------------------------ */

describe('Testing challenge 1', () => {
  test('It should return an array of object instances with a key of author', () => {
    expect(mapCurrentEvents()[0].author).toStrictEqual("go");
  });

  test('It should return an array of object instances with a key of categories', () => {
    expect(mapCurrentEvents()[0].categories).toStrictEqual(["world"]);
  });
  const request = require('supertest');

  let server;

  beforeEach(function () {
    server = createServer();
  });

  afterEach(function () {
    server.close();
  });

  test('responds to /events', function testSlash(done) {
    request(server)
      .get('/events')
      .expect(200, done);
  });

  test('404 everything else', function testPath(done) {
    request(server)
      .get('/foo/bar')
      .expect(404, done);
  });
});

describe('Testing challenge 2', () => {
  test('It should return the length of the array', () => {
    expect(countNumberOfElements([1, 2, 3, 4, 5])).toStrictEqual(5);
  });
});

describe('Testing challenge 3', () => {
  test('It should return an array continaing the names of the characters', () => {
    expect(returnNames(starWarsData)).toStrictEqual([ 'Luke Skywalker', 'C-3PO', 'R2-D2', 'Darth Vader', 'Leia Organa' ]);
    expect(returnNames(starWarsData).length).toStrictEqual(5);
  });
});

describe('Testing challenge 4', () => {
  test('It should return the string with the characters in reverse order', () => {
    expect(reversedString('Code 301')).toStrictEqual('103 edoC');
  });
});

describe('Testing challenge 5', () => {
  test('It should return the total number of children', () => {
    expect(countNumberOfChildren(characters)).toStrictEqual(14);
  });
});

describe('Testing challenge 6', () => {
  test('It should return the average of the numbers in the array', () => {
    expect(calculateAverage([18, 290, 37, 4, 55, 16, 7, 85 ])).toStrictEqual(64);
  });
});

describe('Testing challenge 7', () => {
  test('It should return a count of the prime numbers in the array', () => {
    expect(countPrimeNumbers([1, 2, 13, 64, 45, 56, 17, 8])).toStrictEqual(3);
  });
});

describe('Testing challenge 8', () => {
  test('It should return any stats that match the input', () => {
    expect(extractStat('speed', snorlaxData.stats)).toStrictEqual({ stat: { url: 'https://pokeapi.co/api/v2/stat/6/', name: 'speed' }, effort: 5, baseStat: 30 });
  });
});

describe('Testing challenge 9', () => {
  test('It should return an array containing the names of the children', () => {
    expect(extractChildren(characters)).toStrictEqual([ 'Robb', 'Sansa', 'Arya', 'Bran', 'Rickon', 'Drogon', 'Rhaegal', 'Viserion', 'Margaery', 'Loras' ]);
    expect(extractChildren(characters).length).toStrictEqual(10);
  });
});