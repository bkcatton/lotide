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

const countLetters = function (sentence) {
  const result = {}
  const newSent = sentence.replace(/\s/g, "");
  console.log(newSent);
  for (const i of newSent) {
    //console.log("this is what is logged from the sentence: ", i);
      if (result[i]) {
        result[i] += 1;
      } else {
        result[i] = 1;
      }
  };
  return result;
};

assertEqual((countLetters("sassy").a), 1);
assertEqual((countLetters("sassy").s), 3);


