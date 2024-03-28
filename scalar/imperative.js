// const a = 5;

// if(a*a % 2 == 0){
//     console.log("Square of the number is even")
// }else{
//     console.log("Square of the number is odd")
// }

//declarative

// const checkforSquare = (x) => (x*x % 2 === 0 ? true : false)

// console.log(checkforSquare(4))

//----------------

// function name(fname){
//     console.log(fname)
// }

// name('Neelam')

// function printname(lname){
//     console.log(lname)
// }
// printname('Koli')


//------------------------

// function name(fname,cb){
//     console.log(fname)
//     cb('Koli')
// }
// function printname(lname){
//     console.log(lname)
// }

// name('Neelam',printname)

//----------------------------------

const isEven = (n) => {
    return n%2 == 0
}

let printResult = (evenFn,num) => {
    const isNumEven = evenFn(num)

    console.log(`The number ${num} is an Even number ${isNumEven}`)
}

printResult(isEven,9)