
const assertEqual = function(actual, expected) {
  let returnVal;
  if (actual === expected) {
    returnVal = `😃Assertion Passed: [${actual}] === [${expected}]`;
    console.log(returnVal);
  } else if (actual !== expected) {
    returnVal = `😔Assertion Failed: [${actual}] !== [${expected}]`;
    console.log(returnVal);
  }
};

const tail = function(array) {
  let arrayTail = array.slice(1, array.length);
  return arrayTail;
};
const words = ["Yo Yo", "Lighthouse", "Labs"];

tail([1, 2, 3, 4, 5, 6, 7]);
tail([1]);
tail([]);
tail(words);
assertEqual(words.length, 3);
