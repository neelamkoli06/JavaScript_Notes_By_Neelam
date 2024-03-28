// let n = 25;
// let val = prompt("Guess the number");
// console.log(val);

// while (val != n) {
//     val = prompt("Guess the number you enter wrong number");
// }
// console.log("you are right");

// let str = "         hello world hai         ";

// // newstr = str.toUpperCase();
// console.log(str.trim());

// let fullName = prompt("Enter your name: ");
// console.log(fullName);
// let userName = "@" + fullName + fullName.length;
// console.log(userName);

// let marks = [100, 89, 40, 50, 40, 23];


// let items = [250, 300, 450, 600, 800, 900];
// let idx = 0;
// for (let val of items) {
//     console.log(`vlaue at index ${idx} = ${val}`);
//     let offer = val / 10;
//     items[idx] = items[idx] - offer;
//     console.log(`value after offer = ${items[idx]}`);
//     idx++;
// }

// let arr = [1, 2, 3, 4, 5, 6, 7];
// arr.splice(2, 3, 4, 101, 102, );

// arr.splice(2, 0, 101);
// arr.splice(3, 1, 102);


// function myFunction(msg) {
//     console.log(msg);

// }
// myFunction("i love js")
// const x = 5;
// const arrowSum = (a, b) => {
//     console.log(a + b);
// };


// function countVowels(str) {
//     let count = 0;
//     for (const char of str) {
//         if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
//             count++;

//         }
//     }
//     console.log(count);
// }

// const countVow = (str) => {
//     let count = 0;
//     for (const char of str) {
//         if (char === "a" ||
//             char === "e" ||
//             char === "i" ||
//             char === "o" ||
//             char === "u"
//         ) {
//             count++;
//         }
//     }
//     return count;
// };
// let arr = [1, 2, 3, 4, 5, 6];
// arr.forEach((val) => {
//     console.log(val);
// });
//-----------------------Sum/factorial of given array sized numbers------------
// let n = prompt("Enter a number: ");
// let arr = [];
// for (let i = 1; i <= n; i++) {
//     arr[i - 1] = i;
// }
// console.log(arr);

// let sum = arr.reduce((prev, curr) => {
//     return prev + curr;
// });
// console.log("Sum = ", sum);


// let fact = arr.reduce((prev, curr) => {
//     return prev * curr;
// });
// console.log("Factorial = ", fact);
//-----------------------------------------
// let btn = document.querySelector("btn");
// btn.onclick = (e) => {
//     console.log(e);
//     console.log(e.type);
// };
//----------------------------------------

// let btn1 = document.querySelector("#btn1");
// btn1.addEventListener("click", () => {
//     console.log("button was clicked");
// });
//-------------------