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

const eqObjects = function (object1, object2) {
  if (Object.keys(object2).length !== Object.keys(object1).length) {
    return false;
  }
  let testIfEqual = true;
  for (const key in object1) {
    if (Array.isArray(object1[key])) {
      return eqArrays(object1[key], object2[key]);
    } else if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return testIfEqual;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected) === true) {
    console.log(`😃Assertion Passed: [${inspect(actual)}] === [${inspect(expected)}]`);
  } else if (eqObjects(actual, expected) === false) {
    console.log(`😔Assertion Failed: [${inspect(actual)}] !== [${inspect(expected)}]`);
  }
};

obj1 = {
  a: 1,
  b: 2,
  c: 3
}

obj2 = {
  a: 1,
  b: 2,
  c: 3
}

obj3 = {
  a: [1, 2],
  b: 5
}

obj4 = {
  b: 5,
  a: [1, 2]
}

assertObjectsEqual(obj1, obj2);
assertObjectsEqual(obj2, obj3);
assertObjectsEqual(obj3, obj4);

