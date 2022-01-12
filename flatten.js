const flatten = function(array) {
  let flatArray = [];
  for (let i of array) {
    if (Array.isArray(i)) {
      console.log("the array test worked");
      for (let j of i) {
        flatArray.push(j);
      }
    } else {
      flatArray.push(i);
      console.log("this is the current value being pushed to the empty array, ", i);
    }
  }
  return flatArray;
};

console.log(flatten([1, 2, [3, 4], 5, [6, 8, "ok"]]));