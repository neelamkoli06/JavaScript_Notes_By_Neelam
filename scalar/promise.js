// how to produce a promise.

let myPromise = new Promise(function (resolve, reject) {
  const a = 4;
  const b = 5;

  setTimeout(() => {
    if (a === b) {
      resolve("The values are equal");
    } else {
      reject("The vales are not equal");
    }
  }, 2000);
});

//pending state
// console.log(myPromise);

//fulfilled - then method

//consuming your promise
myPromise.then(function (result) {
  console.log(result);
}); //fulfilled state

myPromise.catch(function (failedResult) {
  console.log(failedResult);
}); //Rejected state


//your promise will get settled.