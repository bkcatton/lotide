const assertEqual = require('../assertEqual');
const tail = require('../tail');

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail([1, 2, 3, 4, 5, 6, 7]);
tail([1]);
tail([]);

assertEqual(tail(words).length, 2);