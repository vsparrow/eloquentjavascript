// Use the reduce method in combination with the concat method
// to “flatten” an array of arrays into a single array
// that has all the elements of the original arrays.

let arrays = [[1, 2, 3], [4, 5], [6]];
// ************************************************
//without reduce
let flattenWithOutReduce = (arr) => {
  let flat = []
  for(let element in arr){
    if(Array.isArray(arr[element])){
      flat = flat.concat(flattenWithOutReduce(arr[element]))
    }
    else {
      flat = flat.concat(arr[element])
    }
  }//for
  return flat
}
// ************************************************
let flatten = (arrays) => {
  return arrays.reduce((a,b) => a.concat(b))
}
// ********TESTS************************************
console.log(flattenWithOutReduce(arrays));
console.log(flatten(arrays));
