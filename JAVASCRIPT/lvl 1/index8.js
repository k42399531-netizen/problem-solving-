// inputes
let first = Number(prompt("please enter the number:"))
let second = Number(prompt("please enter the number:"))
// function
function calaucter(a,b){
    if (isNaN(a) || isNaN(b)){
      return'eror'
    }
    else{
       if (a > b){
        return 'The first number is larger'
       }
       else if (b > a){
        return 'The second number is larger'
       }
       else if (a === b){
        return 'Both numbers are equa'
       }
    }
}
// show
console.log(calaucter(first,second))