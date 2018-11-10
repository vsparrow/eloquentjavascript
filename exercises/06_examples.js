
function symbolExample1(){
  const toStringSymbol = Symbol("toString")

  Array.prototype[toStringSymbol] = function(){
    return `${this.length} cm of blue yarn`
  }

  console.log([1,2].toString());
  console.log([1,2][toStringSymbol]());
  //see how its calling the symbol toStringSymbol
  // not looking at it's refering to symbol that converts to toString
  // but its different from toString
  // so it doesnt interfere with the toString method
}
/////////////////////////////////////////////

/////////////////////////////////////////////
symbolExample1()
