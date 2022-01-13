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

const findKeyByValue = function (bestTVShowsByGenre, name) {
  // loop through all keys in object
  // see if any match
  // return key of matching object
  obj = bestTVShowsByGenre;
  for (const key in obj) {
    //console.log(obj[key]);
    if(obj[key] === name) {
      return key;
    }
  };
};

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sci_fi");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);