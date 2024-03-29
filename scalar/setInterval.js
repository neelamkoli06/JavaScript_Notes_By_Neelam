//normal set interval hello will be printed after every 2s.
// function hello(){
//     console.log('Hello')
// }

// setInterval(hello,2000)

//--------------------------------------------------------------------------------------------------
//now to avoid the above continue execution of code we have used clearInterval in the below code.
function hello(){
    console.log('Hello')
}

let timer = setInterval(hello,1000)
setTimeout(function(){
    clearInterval(timer)

},3000)