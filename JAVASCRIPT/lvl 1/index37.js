let inventory = ["Mouse", "Laptop", "Mouse", "Keyboard", "Mouse"];
let state = -1;
// loop
for (let i = 0; i < inventory.length; i++) {
    if (inventory[i] === "Laptop") {
        state = i;
        break;
    }
}
if (state !== -1) {
    console.log("the state is " + state);
}
else {
    console.log("the state is " + state);
}