const fs = require("fs");

console.log("first line");

// let data = fs.readFileSync('f1.txt')

// console.log('file data is: '+data)
fs.readFile("f1.txt",cb1);

function cb1(err,data) {
  if (err) {
    console.log(err)
  }
  console.log('file1 data --> ' + data)
}


fs.readFile("f2.txt", cb2);

function cb2(err,data) {
    if (err) {
        console.log(err);
    }
    console.log("file2 data --> " + data);
}



console.log("last line");