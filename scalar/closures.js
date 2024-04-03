//lexical scope => function having inside another function and the variable of outer function can be access any where in the function.

//closures => closures means Inner function always has access to the variable of its outer function,even after the outer function has returned.

// function test(){

//     let a=2

//     function test1(){
//         console.log(a)
//     }
//     return test1
// }

// let fun  = test()
// console.log(fun)
// fun()

//---------------------------------code2--------------------------------------------------------

function greet() {
    let name = 'Steve'

    function displayName() {
        console.log('Hello ' + name)

        let age = 25

        function displayAge() {
            console.log('My age is ' + age + " " + name)
        }
        return displayAge
    }
    return displayName
}

let g1 = greet()

// console.log(g1)

// g1() //displayName

let g2 = g1()

// console.log(g2)

g2() //displayAge