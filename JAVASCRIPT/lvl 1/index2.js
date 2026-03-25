// inputes
let user_input = Number(prompt("please enter the minutes:"))
// function
function change(a){
   if(isNaN(a)){
    return 'eror please try again'
   }
   else{
    let secondes = a * 60
    return secondes
   }
} 
// SUmmoing
let SU = change(user_input)
console.log(SU)