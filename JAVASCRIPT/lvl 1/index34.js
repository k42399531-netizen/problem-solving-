// list 
let products = ["Laptop", "Mouse", "Keyboard", "Monitor"];
// loop
for (let i = 0; i < products.length; i++) {
    if (products[i] === "Keyboard") {
        console.log("Keyboard found at index:" + i);
        break;
    }
}