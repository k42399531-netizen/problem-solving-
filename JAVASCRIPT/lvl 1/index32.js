let prices = [10, 60, 30, 90, 40, 100];
let expensiveProducts = [];
// loop
for (let i =0; i < prices.length; i++){
    if (prices[i] > 50){
        expensiveProducts.push(prices[i]);
    }
}
 // show
console.log(expensiveProducts);