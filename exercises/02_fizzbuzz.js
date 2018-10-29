// Write a program that uses console.log to print all the numbers from 1 to 100,
// with two exceptions.
// For numbers divisible by 3, print "Fizz" instead of the number,
// for numbers divisible by 5 (and not 3), print "Buzz" instead.
// print "FizzBuzz" for numbers that are divisible by both 3 and 5

//recursive
let fizzBuzz = (num = 1) => {
  if(num % 3 == 0){
    if(num % 5 == 0){
      console.log("FizzBuzz");
    }
    else {
      console.log("Fizz");
    }
  }
  else if(num % 5 == 0){
    console.log("Buzz");
  }
  else {
    console.log(num);  
  }
  if(num < 100) {
    fizzBuzz(num+1)
  }
}

fizzBuzz()
