
const eqArrays = require('./eqArrays');

const assertArraysEqual = require('./assertArraysEqual');

// ACTUAL FUNCTION
const middle = function(array) {
  let midIndex;
  if (array.length === 0 || array.length === 1 | array.length === 2) {
    midIndex = [];
  } else if (array.length % 2 === 0) {
    midIndex = [Math.floor(array.length / 2), (Math.floor(array.length / 2)+1)];
  } else {
    midIndex = [1 + Math.floor(array.length / 2)];
  }
  return midIndex
}
module.exports = middle;
// TEST CODE

