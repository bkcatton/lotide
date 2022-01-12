
const assertEqual = function(actual, expected) {
  let returnVal;
  if (actual === expected) {
    returnVal = `😃Assertion Passed: [${actual}] === [${expected}]`;
    console.log(returnVal);
    return true;
  } else if (actual !== expected) {
    returnVal = `😔Assertion Failed: [${actual}] !== [${expected}]`;
    console.log(returnVal);
    return false;
  }
};

const eqArrays = function(arrayOne, arrayTwo) {
  if (arrayTwo.length !== arrayOne.length) {
    return false;
  } 

  let testIfEqual = true;
  for (let i = 0; i < arrayOne.length; i++) {
    if ((assertEqual(arrayTwo[i], arrayOne[i])) === false) {
      return false;
    }
  }
  return testIfEqual;
};

//testing if assertEqual works for arrays
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), true);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), true);