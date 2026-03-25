//input
let user_input = prompt("please enter th fruit")
let store = ["Apple", "Banana", "Orange"]
if(store.includes(user_input)){
    console.log("Yes, we have it!")
}
else{
    console.log("Sorry, out of stock")
}