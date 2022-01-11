const head = function(array) {
  let arrayHead = array[0];
  return arrayHead;
};

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

assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([5]), 5);
assertEqual(head([]), 5);

