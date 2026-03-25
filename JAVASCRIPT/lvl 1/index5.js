// inputes
let hight = Number(prompt("please enter the height:"))
let base = Number(prompt("pleae enter the width:"))
// function
function calaucter(a,b){
   if (isNaN(a) || isNaN(b) || a < 0 || b < 0){
    return 'Eroror please try again'
   }
   else{
    let result = 0.5 * a * b
    return result
   }
}
// show
let show = calaucter(hight,base)
console.log(show)