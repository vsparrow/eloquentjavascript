// pre-abstraction
// let repeat = (n) => {
//   for (var i = 0; i < n; i++) {
//     console.log(i);
//   }
// }
// repeat(3)

let repeat = (n, action) => {
  for (var i = 0; i < n; i++) {
    action(i)
  }
}

repeat(3, console.log)
//************************************************
let labels = []
repeat(5, i => {labels.push(`Unit ${i+1}`)})
console.log(labels);
//************************************************
let greaterThan = (n) => {
  return m => m > n
}
let greaterThan10 = greaterThan(10)
console.log(greaterThan10(11));
//************************************************
let noisy = (f) => {
  return (...args) => {
    console.log("calling with ", args);
    let result = f(...args);
    console.log("called with ", args, ", returned", result);
    return result
  }
}

// console.log(noisy(Math.min)); //[function]
// console.log(`${noisy(Math.min)}`); //actual function definition
noisy(Math.min)(3,2,1) // 1
//************************************************
let unless = (test, then) => {
  if(!test) then()
}
repeat(3, n => {
  unless( n % 2 == 1, () => { console.log(n, "is even");} )
})
//************************************************
let filter = (array, test) => {
  let passedTest = []
  for(let element of array){  //like forEach?
    if(test(element)){ passedTest.push(element)}
  }
  return passedTest
}
console.log(filter([1,2,3,4,5,6],n => n % 2 == 0));
//************************************************
let map = (array, transform) => {
  let mapped = []
  for(let element of array){
    mapped.push(transform(element))
  }
  return mapped
}
console.log(map([1,2,3,4,5],n => n * 2));
//************************************************
let reduce = (array, combine, start) => {
  let current = start
  for(let element of array){
    current = combine(current, element)
  }
  return current
}
console.log(reduce([1,2,3,4], (a,b) => a+b, 0));
//************************************************
