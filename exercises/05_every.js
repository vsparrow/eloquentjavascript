// every : a function
// takes an array and a predicate function as parameters.
// Write two versions,
//   one using a loop
//   one using the some method.
//

let every = (array, test) => {
  for(let i = 0; i < array.length; i++){
    if(!test(array[i])){return false}
  }
  return true
}


//********************************************
//Array.prototype.some method tests elements until it finds
//a truth value. Upon first thruty, it returns true

//we want to see if every element passes, not some element
//we can rewrite that as
//we want to see if any fail, not if some pass test function

//does some element NOT fail the test?
//Array.some would return false, because no element fails
//we invert that to true, because then every element passes

let everyUsingSome = (array, test) => {
  return !(array.some(n => {return !(test(n))}))
}


//********************************************

console.log(every([1, 3, 5], n => n < 10));
// → true
console.log(every([2, 4, 16], n => n < 10));
// → false
console.log(every([], n => n < 10));
// → true

console.log(everyUsingSome([1, 3, 5], n => n < 10));
// → true
console.log(everyUsingSome([2, 4, 16], n => n < 10));
// → false
console.log(everyUsingSome([], n => n < 10));
// → true
