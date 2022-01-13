const assertEqual = function(actual, expected) {
  if (actual.length !== expected.length) {
    return false;
  }
  let returnVal;
  if (actual === expected) {
    returnVal = `😃Assertion Passed: [${actual}] === [${expected}]`;
    console.log(returnVal);
  } else if (actual !== expected) {
    returnVal = `😔Assertion Failed: [${actual}] !== [${expected}]`;
    console.log(returnVal);
  }
};

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

const eqObjects = function(object1, object2) {
  // loop through both objects at the same key, and see if they have the same value
  // console.log("this is length of object1:", Object.keys(object1).length)
  // console.log("this is length of object2:", Object.keys(object2).length)

  if (Object.keys(object2).length !== Object.keys(object1).length) {
    //console.log("the number of keys is not equal")
    return false;
  }

  let testIfEqual = true;
  for (const key in object1) {
    if (Array.isArray(object1[key])) {
      //console.log("An array has been identified : ", object1[key])
      //console.log("eqArrays is:", eqArrays(object1[key], object2[key]));
      return eqArrays(object1[key], object2[key]);
    } else if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return testIfEqual;
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };

const cd = { c: "1", d: ["2", 3] };
const dc = { d: [2, 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false);


// assertEqual(eqObjects(ab, ba), true);
// assertEqual(eqObjects(abc, ba), true);
