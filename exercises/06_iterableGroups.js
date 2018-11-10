//Make the Group class from the previous exercise iterable.


class Group {
  constructor(){
    this.items = []
    this.index = 0
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

  next(){
    if(this.index > items.length) return {done: true}
    let value = this.index++;
    console.log(value);
    return {value: this.index[value], done: false}
  }

  static from(array){
    let group = new Group;
    for (var i = 0; i < array.length; i++) {
      group.add(array[i])
    }
    return group
  }
}


// let group = Group.from(["a", "b", "c"])
// console.log(group);
for (let value of Group.from(["a", "b", "c"])) {
  console.log(value);
}
// → a
// → b
// → c
