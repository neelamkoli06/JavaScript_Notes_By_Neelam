// Classical Inheritance

class Person {
  constructor(_name, _age) {
    (this.name = _name), (this.age = _age);
  }
  //method
  Welcome() {
    console.log(`Welcome ${this.name}`)
  }
}

class Teacher extends Person {
  constructor(_name, _age, _classStrength) {
    super(_name, _age);
    this.classStrength = _classStrength;
  }
  test(){
    super.Welcome()
  }
}
class Student extends Person {
  constructor(_name, _age, _CGPA) {
    super(_name, _age);
    this.CGPA = _CGPA;
  }
}

let Person1 = new Person("Adam", 23),
  Teacher1 = new Teacher("Neel", 40, 75)
  Teacher1.test();
//   Student1 = new Student("Mamta", 15, 9.1);
  

// console.log(Teacher1);
// console.log(Person1);
// console.log(Student1);
