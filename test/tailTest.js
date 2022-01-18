const assertEqual = require('../assertEqual');
const tail = require('../tail');
const assert = require('chai').assert;

describe('#tail', () => {
  it('returns [2, 3] for [1, 2, 3]', () => {
    console.log(tail([1, 2, 3]));
    assert.deepEqual(tail([1, 2, 3]), [2, 3]);
  });
});


