// -------------- doubleValues -------------
// Write a function called doubleValues which accepts an array and returns a new array with all the values in the array passed to the function doubled
// doubleValues([1,2,3]) returns [2,4,6]
// doubleValues([1, 2, 3]);

function doubleValues(arr) {
  let newArr = [];
  arr.forEach(function (el) {
    newArr.push(el * 2);
  });
  return newArr;
}

const returnedArr = doubleValues([1, 2, 3]);
// console.log(returnedArr);
// ----------------------------------------

// ------------ onlyEvenValues ------------
// Write a function called onlyEvenValues which accepts an array and returns a new array with only the even values in the array passed to the function
// onlyEvenValues([1,2,3]) // [2]
// onlyEvenValues([5,1,2,3,10]) // [2,10]

function onlyEvenValues(arr) {
  let newArr = [];
  arr.forEach(function (el) {
    if (el % 2 === 0) {
      newArr.push(el);
    }
  });
  return newArr;
}

const evenArr = onlyEvenValues([5, 1, 2, 3, 10]);
// console.log(evenArr);
// ----------------------------------------

// ------------ showFirstAndLast ------------
// Write a function called showFirstAndLast which accepts an array of strings and returns a new array with only the first and last character of each string.
// showFirstAndLast(['colt','matt', 'tim', 'test']) // ["ct", "mt", "tm", "tt"]
// showFirstAndLast(['hi', 'goodbye', 'smile']) // ['hi', 'ge', 'se']

function showFirstAndLast(arr) {
  let newArr = [];
  arr.forEach(function (el) {
    newArr.push(el[0] + el[el.length - 1]);
  });
  return newArr;
}

const firstAndLast = showFirstAndLast(["hi", "goodbye", "smile"]);
// console.log(firstAndLast);
// ----------------------------------------

// ------------ addKeyAndValue ------------
// Write a function called addKeyAndValue which accepts an array of objects, a key, and a value and returns the array passed to the function with the new key and value added for each object

function addKeyAndValue(arr, key, value) {
  arr.forEach(function (el) {
    el[key] = value;
  });
  return arr;
}

// ----------------------------------------

// ------------ vowelCount ------------
//Write a function called vowelCount which accepts a string and returns an object with the keys as the vowel and the values as the number of times the vowel appears in the string. This function should be case insensitive so a lowercase letter and uppercase letter should count

// vowelCount('Elie') // {e:2,i:1};
// vowelCount('Tim') // {i:1};
// vowelCount('Matt') // {a:1})
// vowelCount('hmmm') // {};
// vowelCount('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1}

function vowelCount(str) {
  let wordArr = str.split(""); // Converts the string into an array
  let obj = {}; // Sets up empty object
  const vowels = "aeiou"; // Creates the string each element of the array is compared to.

  // forEach loop that will execute for every el of the array (which was created from the input string via the split("") method
  wordArr.forEach(function (el) {
    let lowerCase = el.toLowerCase(); // converts the passed el to lower case

    // Searches the vowels string to see if there is a match to the lowerCase element passed into it. If there is a match, the number returned will be the position of the vowels match. i.e., if the el passed is an 'a', then the index will return 0. If the el passed is 'u', then the index returned will be 4. If there is no match, then the index will return -1.
    if (vowels.indexOf(lowerCase) !== -1) {
      // Checks to see if there is a key:value pair for each vowels. If there is not, then the key is added to the obj and it set to 1. If the obj key:value already exists, then 1 is added to its value. This allows us to count the number of times each vowels was found.
      if (obj[lowerCase]) {
        obj[lowerCase]++;
      } else {
        obj[lowerCase] = 1;
      }
    }
  });
  return obj; // Returns the full, final object
}
const myCount = vowelCount("I Am awesome and so are you");
// console.log(myCount);

// ----------------------------------------

// --------- doubleValuesWithMap ----------
//Write a function called doubleValuesWithMap which accepts an array and returns a new array with all the values in the array passed to the function doubled
// doubleValuesWithMap([1,2,3]) // [2,4,6]
// doubleValuesWithMap([1,-2,-3]) // [2,-4,-6]

function doubleValuesWithMap(arr) {
  return arr.map(function (el) {
    return el * 2;
  });
}

// console.log(doubleValuesWithMap([1, 2, 3]));

// ----------------------------------------

// --------- valTimesIndex ----------
// Write a function called valTimesIndex which accepts an array and returns a new array with each value multiplied by the index it is currently at in the array.
// valTimesIndex([1,2,3]) // [0,2,6]
// valTimesIndex([1,-2,-3]) // [0,-2,-6]

function valTimesIndex(arr) {
  return arr.map(function (val, index) {
    return val * index;
  });
}

console.log(valTimesIndex([1, -2, -3]));
