// Neither may use the standard reverse method.

// reverseArray, takes an array as argument
//   and produces a new array that has the same elements
//   in the inverse order.
let reverseArray = (arr) => {
  let newArr = []
  for (let i = arr.length-1;  i >= 0;  i--) {
    newArr.push(arr[i])
  }
  return newArr
}

// reverseArrayInPlace, does what the reverse method does:
//   it modifies the array given as argument by reversing its elements.
let reverseArrayInPlace = (arr) => {
  start = 0
  end = (arr.length)-1
  while(start <= end){
    let temp = arr[start]
    arr[start] = arr[end]
    arr[end] = temp
    start++
    end--
  }
  //no return needed since we are modifiying an array not creating a new one.
}

//*******************TESTS **********************
console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];

let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]

let arrayValue2 = ["A", "B", "C", "D"];
reverseArrayInPlace(arrayValue2);
console.log(arrayValue2);
//  [ 'D', 'C', 'B', 'A' ]
