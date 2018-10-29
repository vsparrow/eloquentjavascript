// Write a program that creates a string that represents an 8×8 grid,
// using newline characters to separate lines.
// At each position of the grid there is either a space or a "#" character.
// The characters should form a chessboard.
//
// Passing this string to console.log should show something like this:
//
//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #
// When you have a program that generates this pattern,
// define a binding size = 8 and change the program so that it works for any size,
// outputting a grid of the given width and height.

//odd line starts with space
//even line start with #

let printRow = (countOfColumns, currentLineNumber) => {
  let currentChar = ""
  let line = ""
  currentLineNumber % 2 == 0 ? currentChar = "#" : currentChar = " "
  for(let i = 0; i < countOfColumns; i++){
    line += currentChar
    currentChar == "#" ? currentChar = " " : currentChar = "#"
  }
  console.log(line);
}

function chessboard(num = 8){
  let current = 1
  while(current <= num){
    printRow(num, current)//print current row
    current++
  }
}

//testing the program
chessboard()
console.log();
chessboard(4)
