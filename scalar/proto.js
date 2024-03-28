// let myObj = {};

// console.log(myObj);

// let Person1 = {
//   name: "Adam",
//   age: 24,
// };

// console.log(Person1.hasOwnProperty("gender"));

// function Person(_name,_age){
//     this.name = _name
//     this.age = _age
// }

// let Person2 = new Person('Steve',25)
// console.log(Person2)

//---------------------------------------

function Person(_name, _age) {
  this.name = _name;
  this.age = _age;
}
Person.prototype.getNameAndAge = function () {
  console.log(`I am ${this.name} and my age is ${this.age}`);
};
let Person1 = new Person("Adam", 25);

let Person2 = new Person("Steve", 40);

console.log(Person1.getNameAndAge());
console.log(Person2);
