let inventory = ["Mouse", "Laptop", "Mouse", "Keyboard", "Mouse"];
let count = 0;
// loop
for (let i = 0; i < inventory.length; i++) {
    if (inventory[i] === "Mouse") {
        count++;
    }
}
console.log("the count is " + count);