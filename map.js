const eqArrays = function (arrayOne, arrayTwo) { //tests if all instances are the same at same index
  if (arrayTwo.length !== arrayOne.length) {
    return false;
  }
  let testIfEqual = true;
  for (let i = 0; i < arrayOne.length; i++) {
    if (arrayTwo[i] !== arrayOne[i]) {
      return false;
    }
  }
  return testIfEqual;
};

const assertArraysEqual = function(actual, expected) {
  let returnVal;
  if (eqArrays(actual, expected) === true) {
    returnVal = `😃Assertion Passed: [${actual}] === [${expected}]`;
    console.log(returnVal);
  } else if (eqArrays(actual, expected) === false) {
    returnVal = `😔Assertion Failed: [${actual}] !== [${expected}]`;
    console.log(returnVal);
  }
};


const map = function(array, callback) {
  const results = [];
  for (let i of array) {
    results.push(callback(i));
  }
  return results;
};

const words = ["ground", "control", "to", "major", "tom"];

const results1 = map(words, function(word){
   return word[0];
  });

const results2 = map(words, function (word) {
  return word.length;
});

const results3 = map(words,(word) => {return word + " " + 1;});


assertArraysEqual(results1, ["g", "c", "t", "m", "t"]);
assertArraysEqual(results2, [6, 7, 2, 5, 3]);
assertArraysEqual(results3, ["ground 1", "control 1", "to 1", "major 1", "tom 1"]);
