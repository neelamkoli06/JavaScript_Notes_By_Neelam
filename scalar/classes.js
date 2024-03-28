class Person {
  constructor(_name, _age) {
    (this.name = _name), (this.age = _age);
  }
  welcome(){
    console.log(`welcome ${this.name}`)
  }
}

let Person1 = new Person("Neelam", 24);
let Person2 = new Person("Adam", 22);

let Person3 = new Person("Nick", 20);

let Person4 = new Person("Fedrik", 30);

console.log(Person1);
console.log(Person2);
console.log(Person3);
console.log(Person4);

Person1.welcome()


