
// Write a class called Group
//   methods: add, delete, has
//   constructor: creates an empty group,
//   add: adds a value to the group
//     (but only if it isn’t already a member),
//   delete: removes its argument from the group (if it was a member),
//   has: returns a Boolean value indicating whether
//     its argument is a member of the group.
//
//   NOTE: Use the === operator, or something equivalent such as indexOf,
//     to determine whether two values are the same.
//
//   static from method that takes an iterable object as argument
//     and creates a group that contains all the values produced
//     by iterating over it.

class Group {
  constructor(){
    this.items = []
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
    for (var i = array[0]; i <= array[1]; i++) {
      group.add(i)
    }
    return group
  }
}


let group = Group.from([10, 20]);
console.log(group);
//Group { items: [ 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20 ] }
console.log(group.has(10));
// // → true
console.log(group.has(30));
// // → false
group.add(10);
group.delete(10);
console.log(group.has(10));
// → false
