//inputes
let user_input = Number(prompt("please enter the age:"))
//function
function calaucter(a){
   if (isNaN(a) || a < 0){
    return 'eror please try again'
   }
   else{
    if(a < 13){
      return 'child'
    }
    else if (a >= 13 && a<=19){
      return 'Teenager'
    }
    else if (a >= 20){
      return 'Adult'
    }
   }
}
//show
console.log(calaucter(user_input))
// 