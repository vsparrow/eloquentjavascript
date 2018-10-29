// Looping a triangle
// Write a loop that makes seven calls to console.log to output the following triangle:
//
// #
// ##
// ###
// ####
// #####
// ######
// #######

//Loop as asked for by spec
for(let i = 1; i <= 7; i++){
  let output = ""
  for(let j = 0; j < i; j++){
    output += "#"
  }
  console.log(output);
}
//iterative solution using a function if you wanted to change the count.
let triangle = (num) => {
  for(let i = 1; i <= num; i++){
    let output = ""
    for(let j = 0; j < i; j++){
      output += "#"
    }
    console.log(output);
  }
}

// triangle(7)
