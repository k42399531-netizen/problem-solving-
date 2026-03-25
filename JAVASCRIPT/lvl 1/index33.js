let originalPrices = [100, 200, 300];
let pricesWithTax = [];

// loop
for (let i= 0; i < originalPrices.length; i++){
   let result = originalPrices[i] * 1.1
   pricesWithTax.push(result)
}

// show
console.log(pricesWithTax)