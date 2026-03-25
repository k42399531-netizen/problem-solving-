// list
let grades = [45, 85, 30, 90, 60];
let successCount = 0;
// loop
for (let i =0; i< grades.length; i++){
   if (grades[i] >= 50){
        successCount+=1;
   }
}
console.log('Total successful students:' + successCount);