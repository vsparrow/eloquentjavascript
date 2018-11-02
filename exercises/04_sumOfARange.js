// Write a range function that takes two arguments, start and end,
//  and returns an array containing all the numbers
//  from start up to (and including) end.
// bonus assignment, modify your range function to take an
//  optional third argument that indicates the “step” value used
//  when building the array.
//  If no step is given, the elements go up by increments of one
//  Make sure it also works with negative step values

let range = (start, end, step=null) => {
  //default step should be -1 if start > end else step is 1
  if(step == null) {start > end ? step = -1 : step = 1}
  let arr = []
  if (step < 0) {
    for (var i = start; i >= end; i+=step) {arr.push(i)}
  }
  else {
    for (var i = start; i <= end; i+=step) {arr.push(i)}
  }
  return arr
}

// write a sum function that takes an array of numbers
//  and returns the sum of these numbers.
let sum = (arr) => {
  let count = 0;
  for (var i = 0; i < arr.length; i++) {
    count += arr[i]
  }
  return count
}
//*******************TESTS **********************

console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(1, 10, 2));
//  [1, 3, 5, 7, 9]
console.log(range(5, 2, -1));
//  [5, 4, 3, 2].
console.log(range(7, 3));
//  [7, 6, 5, 4, 3].
console.log(sum(range(1, 10)));
// → 55
