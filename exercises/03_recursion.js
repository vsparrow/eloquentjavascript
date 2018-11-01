// Define a recursive function isEven
// function should accept a single parameter (a positive, whole number)
// return a Boolean.

// Use the following algorithm to determine evenness
// Zero is even.
// One is odd.
// For any other number N, its evenness is the same as N - 2.

let isEven = (num) => {
  if( num < 0) { num = num - num * 2} //convert negative to positive
  if(num == 0) { return true}
  else if(num == 1) { return false}
  else {return isEven(num-2)}
}

console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → ??
