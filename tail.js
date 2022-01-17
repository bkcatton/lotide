
const assertEqual = require('./assertEqual');

const tail = function(array) {
  let arrayTail = array.slice(1, array.length);
  return arrayTail;
};


module.exports = tail;
