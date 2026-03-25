// inputes
let user_input1 = Number(prompt("plese enter the second number:"))
let user_input2 = Number(prompt("plese enter the second number:"))
// function
function calaucter(a,b){
    if (isNaN(a) || isNaN(b) || b == 0){
       return 'eror please try again'
    }
    else{
       let result = a % b;
        return result
    }

}
// show
let show = calaucter(user_input1,user_input2)
console.log(show)