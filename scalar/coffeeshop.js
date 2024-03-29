function placeOrder(drink) {
  return new Promise(function (resolve, reject) {
    if (drink === "coffee") {
      resolve("order for coffee recieved");
    } else {
      reject("other orders rejected");
    }
  });
}

function processOrder(order) {
  return new Promise(function (resolve) {
    console.log("order is being processed");
    resolve(`${order} and is served`);
  });
}
// placeOrder('coffee').then(function(orderPlaced) {
//     console.log(orderPlaced)
//     let orderIsProcessed = processOrder(orderPlaced)
//     return orderIsProcessed
// }).then(function(processOrder){
//     console.log(processOrder)
// }).catch(function(err){
//     console.log(err)
// })      //chaining of promise or solution with promises

//Async  Await - keywords

async function serveOrder() {
    try {
        let orderPlaced = await placeOrder("coffee");
        console.log(orderPlaced);

        let processedOrder = await processOrder(orderPlaced);
        console.log(processedOrder);
    } catch (error) {
        console.log(error)
    }
  
}
serveOrder();
