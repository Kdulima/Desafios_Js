//WITH CLASS

// class Dog {
//   constructor (name) {
//     this.name = name;
//   }

//   bark() {
//     return this.name + ' says woof hey!';
//   }
// }

// function makeItBark(name) {
//   let scooby = new Dog(name);
//   return scooby.bark();
// }

// console.log(makeItBark('carlos'));

//FUNCTION

function Dog(name) {
  this.name = name;
}

Dog.prototype.bark = function() {
  return this.name + ' says woof hey!';
}
let scooby = new Dog('scooby');
console.log(scooby.bark());