//function layout:
// return the middle value if an array has an odd number of elements
// return the two middle values if an array has an even number of elements

// edge cases: 
// 1. if an element has only one or two elements, return an empty array

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

// ACTUAL FUNCTION
const middle = function(array) {
  let midIndex;
  //console.log(array.length);
  if (array.length === 0 || array.length === 1 | array.length === 2) {
    midIndex = [];
  } else if (array.length % 2 === 0) {
    //console.log("I am testing out the is Even function");
    midIndex = [Math.floor(array.length / 2), (Math.floor(array.length / 2)+1)];
    //console.log("the middle (even) index is:", midIndex);
  } else {
    midIndex = [1 + Math.floor(array.length / 2)];
    //console.log("the middle (odd) index is:", midIndex);
  }
  return midIndex
}

// TEST CODE
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), ([3,4]));
assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7]), ([4]));
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
