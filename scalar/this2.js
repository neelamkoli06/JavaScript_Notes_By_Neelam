'use strict'

// console.log(this)

//--------------------------------
// function displayThis() {
//     console.log(this)
// }

// displayThis()

//-------------------------------

// let myobj = {
//     name: "Shalini",
//     age:30,

//     myFn1: function(){
//         console.log(this)
//     }
// }

// myobj.myFn1()

//--------------------------------

let myobj2 = {
    name: "Shalini",
    age:30,

    myFn2: function(){
        function myFn3(){
            console.log(this)
        }
        myFn3()

    }
}
myobj2.myFn2()