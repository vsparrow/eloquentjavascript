// deepEqual
//   takes two values
//   returns true only if they are the same value
//     or are objects with the same properties,
//     where the values of the properties are equal
//     when compared with a recursive call to deepEqual.
// algo
// if object do deep equal; else use equality operator
// but check for null first as null is also typeof object

let deepEqual = (a, b) => {
  //not objects
  if(typeof a !== "object" || a == null ){
    return a == b
  }
  //objects
  else {
    //get the keys
    let keysA = Object.keys(a)
    let keysB = Object.keys(b)
    //keys of different length then false
    if (keysA.length != keysB.length){return false}
    //compare keys
    for (var i = 0; i < keysA.length; i++) {
      if(!deepEqual(a[keysA[i]],b[keysB[i]])){return false}
    }
  }
  return true
}


// **********************TESTS ***************************
let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true
