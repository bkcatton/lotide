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

const eqArrays = function (arrayOne, arrayTwo) { //tests if all instances are the same at same index
  
  let testIfEqual = true;
  for (let i = 0; i < arrayOne.length; i++) {
    if (arrayTwo[i] !== arrayOne[i]) {
      return false;
    }
  }
  return testIfEqual;
};

const without = function(source, itemsToRemove) {
  //return a new array which is the source array minus any items that are present in 2nd ar
  const newArray = [...source];
    for (let i in itemsToRemove) {
      for (let j in newArray) {
        if (newArray[j] === itemsToRemove[i]) {
          console.log("removing :", newArray[j]);
          newArray.splice(j, 1);
        }
      }
    }
  return newArray;
};

console.log(without([1, 2, 3], [1, 2, 4]));
console.log(without(["1", "2", "3"], [1, 2, "3"]));

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
