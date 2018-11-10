//Make the Group class from the previous exercise iterable.


class Group {
  constructor(){
    this.items = []
    // this.index = 0
  }
  add(x){
    if(this.items.indexOf(x) == -1){this.items.push(x)}
  }

  delete(x){
    let location = this.items.indexOf(x)
    if(location != -1){this.items.splice(location)}
  }

  has(x){
    if(this.items.indexOf(x) == -1){return false}
    return true
  }


  static from(array){
    let group = new Group;
    for (var i = 0; i < array.length; i++) {
      group.add(array[i])
    }
    return group
  }
}
/////////////////////////////////////
class GroupIterator {
  constructor(group){
    this.group = group
    this.index = 0
  }
  next(){
    if(this.index >= this.group.items.length) return {done: true}
    let value = this.index++;
    return {value: this.group.items[value], done: false}
  }
}
////////////////////////////////////
Group.prototype[Symbol.iterator] = function(){
  return new GroupIterator(this)
}



for (let value of Group.from(["a", "b", "c"])) {
  console.log(value);
}
// → a
// → b
// → c
