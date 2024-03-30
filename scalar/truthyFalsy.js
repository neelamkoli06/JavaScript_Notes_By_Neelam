// let a = 2;

// if (a) {
//   console.log("I am truthy");
// } else {
//   console.log("I am Falsy");
// }
//------------------------------------------------------
//falsy values are:

//false
// 0 (zero)
// -0 (minus zero)
// 0n (BigInt zero)
//'',"",``(empty string)
//null
//undefined
//NaN
//----------------------------------------------------------
//truthy :

//{} (empty object)
//[] (empty array)
//and other all values whether it is atring or number all will be truthy

//------------------------------code1--------------------------

(function () {
  if ((-100 && 100 && "0") || [] === true || 0) {
    console.log(1);

    if ([] || (0 && false)) {
      console.log(2);
    }

    if (Infinity && NaN && "false") {
      console.log(3);

      if ("") {
        console.log(4);
      }
    } else {
      console.log(5);
      if (({} || false === "") && !(null && undefined)) {
        console.log(6);
      }
    }
  }
})();
