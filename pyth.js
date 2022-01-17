const input = [
  { x: 3, y: 4 },
  { x: 12, y: 5 },
  { x: 8, y: 15 }
];
const result = input.map(function(items) {
  return Math.sqrt((items['x'] * items['x']) + (items['y'] * items['y']));
});

console.log(result[0] === 5);
console.log(result[1] === 13);
console.log(result[2] === 17);