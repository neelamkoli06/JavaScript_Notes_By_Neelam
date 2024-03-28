//map

// let num = [1,2,3,4,5]

// const squaredNum = num.map(function(n){
//     return n*n
// })
// console.log(squaredNum)

//---------------------map-------------

// const transaction = [1000,3000,4000,2000,-898,3800,-4500];

// const intoDollar = 80;

// let result = transaction.map((amount) => {
//     return amount/intoDollar.toFixed(0)

// })
// console.log(result)

//----------------------find--------------

// const transaction = [100,200,300,400,500,-100,-300,-400];

// let firstWithdrawl = transaction.find(function(n){
//     return n < 0
// })
// console.log(firstWithdrawl)

//---------------------findIndex-------------

// const transaction = [100,200,300,400,500,-100,-300,-400];

// let firstWithdrawl = transaction.findIndex(function(n){
//     return n<0
// })
// console.log(firstWithdrawl)

//----------------some----------

// const transaction = [-1000,-2000,-4000,-3000,2000];

// let firstWithdrawl = transaction.some(function(n){
//     return n>0
// })
// console.log(firstWithdrawl)

//---------------every------------

// const transaction = [-1000,-2000,-4000,-3000,-2000];
// let firstWithdrawl = transaction.every(function(n){
//     return n>0
// })
// console.log(firstWithdrawl)

//--------------------   filter   -----------------------

// let numbers = [13,20,15,40,65];

// let result = numbers.filter(function(n){
//     return n%2 == 0
// })
// console.log(result)

//-------------- reduce ----------------

// let num  = [1,2,3,4,10]

// let result = num.reduce(function(acc,value){
//     let updatedSum = acc + value
//     return updatedSum

// }, 0 )

// console.log(result);


// let product = num.reduce(function(acc,value){
//     let updatedProduct = acc * value
//     return updatedProduct

// }, 1 )

// console.log(product);

//------------------- chaining ---------------------------

let arr = [
    { name: "seema", Age:24, gender:"F" },
    { name: "Haka", Age:30, gender:"M" },
    { name: "Hritik", Age:40, gender:"M" },
    { name: "Tigher", Age:32, gender:"M" },
    { name: "Rekha", Age:50, gender:"F" }
]

let malesAges = arr.filter(function(obj){
    return obj.gender == "M"
}).map(function(male){
    return male.age
})

// let ageOfMales = males.map(function(male){
//     return male.Age
// })                                   //regular method

console.log(malesAges)
// console.log(ageOfMales)