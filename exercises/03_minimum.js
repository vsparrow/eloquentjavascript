// Write a function min that takes two arguments
// and returns their minimum.

let min = (a, b) => {
  if(a <= b) { return a }
  return b
}




console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10
