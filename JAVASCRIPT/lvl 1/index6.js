// inputes
let number = Number(prompt("please enter the number:"))
// function
function calaucter(a){
    if (isNaN(a)){
        return 'eror'
    }
    else if(a % 2 === 0){
      return 'Even'
    }
    else{
        return 'Odd'
    }
}
// show
let show = calaucter(number)
console.log(show)