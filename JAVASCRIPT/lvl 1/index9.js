// inputes
let user_input = Number(prompt("Enter a number: "));
// function
const calaucter = (a) =>{
  if (isNaN(a) || a < 0 || a> 100){
    return 'Eroro please try again'
  }
  else {
    switch (true) {
        case a >= 90:
            return 'A'
            break;
        case a >= 80 && a <= 89:
            return 'B'
            break;     
        case a >= 70 && a <=79:
            return 'C'
            break;
        case a >= 60 && a <=69:
            return 'D'
            break;
        case a < 60 :
            return "F"
            break;        
        default:
            return 'eror'
            break;
    }
  }
}
// show
console.log(calaucter(user_input))