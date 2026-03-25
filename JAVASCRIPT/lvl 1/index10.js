// inputes
let num1 = Number(prompt("please enter the first number:"))
let num2 = Number(prompt("please enter the second number:"))
let type = prompt("please enter the type calaucter:")
// function
const calaucter = (a,b,c) =>{
    if (isNaN(a) || isNaN(b) || b===0 && c=="/"){
     return'eror'
    }
    else{
        switch (c) {
            case "+":
                let result1 = a + b
                return result1
            case "-":
                let result2 = a - b
                return result2
            case "*":
                let result3 = a * b
                return result3
            case "/":
                let result4 = a / b
                return result4 
            default:
                return 'eror'
                break;
        }
    }
}
// show
console.log(calaucter(num1,num2,type))