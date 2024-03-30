let firstPerson = {
    name:'Adam',
    age: 25
}

let secondPerson = firstPerson

firstPerson.name = 'Steve'

console.log(firstPerson)
console.log(secondPerson)