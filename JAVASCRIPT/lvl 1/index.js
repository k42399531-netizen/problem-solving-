// inputes
let number1 = Number(prompt("please enter the first number:"))
let number2 = Number(prompt("please enter the second number:"))
// function
function sum(a,b){
  if (isNaN(a) || isNaN(b)) {
    return 'Eror please try again'
  }
  else{
    let result = a +b
    return result
  }
}
// Summoning
sum(number1,number2)