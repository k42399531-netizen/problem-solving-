//lecture task 4
//---------------------------


// 1-task 1
function greetuser(name){
  return `hello ${name}! Welcome back .`
}
console.log(greetuser("ahmed"));
console.log(greetuser("gamal"));
console.log(greetuser("sara"));



// 2-task 2
const x = 100; 
function scope(){
    const x = 50;
    console.log(x) // special range
}
scope();
console.log(x);// general range


//3- task 3
console.log(s)
var s = 100; // undefind
console.log(y);
const y = 200;//eror 
console.log(p);
const p = 300;//eror
// function
hosting();
function hosting(){
    console.log("hi")
}
hosting();
// arrow function
hosting2(); // eror
const hosting2= ()=>{
    console.log("hi")
}
hosting2();



//task4

// arrow function1
const aqure =(num) =>{
   let result = num ** 2
   return result
}
console.log(aqure(5))

// arrow function 2
const isAdult = (age) =>{
  if (age >= 18){
    return true
  }
  else{
    return false
  }
}
console.log(isAdult(23))