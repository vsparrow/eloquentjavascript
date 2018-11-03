// arrayToList
//   that builds up a list structure like the one shown (see book)
//   when given [1, 2, 3] as argument
let arrayToList = (arr) => {
  let list = null;
  for (var i = arr.length-1; i >= 0; i--) {
    list = prepend(arr[i], list)
  }
  return list
}

// listToArray
//   function that produces an array from a list
let listToArray = (list) => {
    let array = []
    while(list){
      array.push(list.value)
      list = list.rest
    }
  return array
}

// prepend, helper function
//   which takes an element and a list
//   and creates a new list that adds the element
//   to the front of the input list,
let prepend = (e, list) => {  //e for element
  return { value: e, rest: list}
}

// nth, helper function
//   which takes a list and a number
//   and returns the element at the given position in the list
//   (with zero referring to the first element)
//   or undefined when there is no such element.
//   (bonus) write a recursive version of nth.
let nth = (list, position ) => {
  function findPosition(l, index){
    if(!l) {return undefined}
    else if(index == position) {return l.value}
    else {return findPosition(l.rest, ++index)}
  }
  return findPosition(list, 0)
}

let nthAlternative = (list, position) => {
  if(!list || position < 0) {return undefined}
  if (position == 0) {return list.value}
  else {return nthAlternative(list.rest, --position)}
}

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
console.log(nthAlternative(arrayToList([10, 20, 30]), 1));
// → 20
