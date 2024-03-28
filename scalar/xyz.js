// function Person(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
// }
// const member = new Person("Lydia", "Hallie");
// Person.getFullName = function() {
//     return `${this.firstName} ${this.lastName}`;
// };
// console.log(member.getFullName());


// function Person(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
// }
// const lydia = new Person("Lydia", "Hallie");
// const sarah = Person("Sarah", "Smith");
// console.log(lydia);
// console.log(sarah);

// const bird = {
//     size: "small",
// };

// const mouse = {
//     name: "Mickey",
//     small: true,
// };

// mouse[bird["size"]]



const shape = {
    radius: 10,
    diameter() {
        return this.radius * 2;
    },
    perimeter: () => 2 * Math.PI * this.radius,
};

console.log(shape.diameter());
console.log(shape.perimeter());