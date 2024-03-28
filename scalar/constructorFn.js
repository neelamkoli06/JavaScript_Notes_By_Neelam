// let car1 = {
//     name: 'x4',
//     company: 'BMW',
//     color: 'White'
// }

// let car2 = {
//     name: 'GT4',
//     company: 'Ferrari',
//     color: 'Red'
// }
//-------------------------------to avoid the above code we use constructor as below code for same purpose--------------

function createCar(_name, _company, _color) {
  (this.name = _name), 
  (this.company = _company), 
  (this.color = _color);

  this.drive = function () {
    console.log(`I am driving ${this.name} and it is of ${this.color} color`);
  };
}
let car1 = new createCar("x4", "BMW", "White");

// console.log(car1);

car1.drive();
