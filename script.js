// ---creating button only using javascript

// let newbtn = document.createElement("button");
// newbtn.innerText = "click me";
// newbtn.style.color = "white";
// newbtn.style.backgroundColor = "red";

// document.querySelector("body").prepend(newbtn);

// //------------------

// let para = document.querySelector("p");

//--------darkmode------

// let modebtn = document.querySelector("#mode");
// let currMode = "light";

// modebtn.addEventListener("click", () => {

//     if (currMode === "light") {
//         currMode = "dark";

//         document.querySelector("body").style.backgroundColor = "black";
//     } else {
//         currMode = "light";
//         document.querySelector("body").style.backgroundColor = "white";

//     }
//     console.log(currMode);
// });
//--------------------------------------
// let DATA = "select information";
// class user {
//     constructor(name, email) {
//         this.name = name;
//         this.email = email;
//     }
//     viewData() {
//         console.log("data= ", DATA);
//     }
// }
// class Admin extends user {
//     constructor(name, email) {
//         super(name, email);
//     }
//     editData() {
//         DATA = "Some new value";
//     }

// }
// let student1 = new user("neelam", "neelam@gmail.com");
// let student2 = new user("aarti", "aarti@gmail.com");

// let Admin1 = new Admin("admin", "admin@gmail.com");

//--------------------------------------------
// function asyncFunction1() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Some data1");
//             resolve("Success");
//         }, 4000);
//     });
// }

// function asyncFunction2() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Some data2");
//             resolve("Success");
//         }, 4000);
//     });
// }
// console.log("fetching data1.....");
// let p1 = asyncFunction1();
// p1.then((res) => {

//     console.log("fetching data2.....");
//     let p2 = asyncFunction2();
//     p1.then((res) => {

//     })
// })

//---------------------------------

async function hello() {
    console.log("hello");
}