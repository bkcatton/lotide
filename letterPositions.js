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

const letterPositions = function (sentence) {
  const result = {}
  //console.log(sentence);
  for (const i in sentence) {
    //console.log("this is what is logged from the sentence: ", i);
    if (sentence[i] !== " ") {
      if (result[sentence[i]]) {
        result[sentence[i]].push(+i);
      } else {
        result[sentence[i]] = [+i];
      }
    }
  };
  return result;
};

assertArraysEqual(letterPositions("sassy").s,[0, 2, 3]);
assertArraysEqual(letterPositions("hello").e, [1]);