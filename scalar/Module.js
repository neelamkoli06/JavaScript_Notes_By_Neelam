// var arr = [1, 'Ferrari', 12.4, true]
// console.log(arr)

// var a = arr[1]
// console.log(arr[3])

// arr[1] = 'Bentley'
// console.log(arr)

// console.log(arr.length)

// var arr2 = [12, 14, 56, 94]
// arr2.pop()
// console.log("without shifting the actual array",arr2)
// arr2.push(34)
// console.log(arr2)
// let a = arr2.shift()
// console.log("element which we shift: ",a)
// console.log("After shifting",arr2)

// arr2.unshift(102)
// console.log(arr2)

//--------------------------------------------------
//object

var person ={
    firstName: "Neelam",
    lastName: "Koli",
    age:24,
    isAvenger:true,
    quality:['polite','nice','intelligent','skilled person'],
    skill:{
        html:"intermediate",
        css:"intermeadiate",
        javascript:"Advance",

        secondary_skills:{
            java:"basic",
            python:"intermeadiate"

        }
    }
    
};
// console.log(person)
// console.log(person.age)
// console.log(person.firstName)
// person.isAvenger = false
// console.log(person)
// console.log(person['firstName'])

// console.log(person.skill.secondary_skills)
console.log(person.quality[0])
person.movie=['The civil war']

console.log(person)

delete person.quality
console.log(person)