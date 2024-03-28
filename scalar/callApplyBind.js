let Person1 = {
    firstName : 'Steve',
    lastName : 'Rogers',
    age : 102,

    
}
let printDetails = function(state){
        console.log(`Hi I am ${this.firstName} ${this.lastName} and I am ${this.age} years old and i am from ${state}`)
    }

let Person2 = {
  firstName: "Iron",
  lastName: "Man",
  age: 100,

}
// //call
// printDetails.call(Person2,'New York')

// //apply
// printDetails.apply(Person2, ['New York']);

//bind
let myFun = printDetails.bind(Person2,"New York")
console.log(myFun)

myFun()


// Person1.printDetails()
// Person2.printDetails()