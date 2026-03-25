// list
let scores = [10, 55, 80, 20, 95, 40,100];
let passCount = scores[0];
// loop
for (let i =0; i < scores.length ; i++){
    if (scores [i] < passCount){
        passCount = scores[i]
    }
}
// show
console.log(passCount)