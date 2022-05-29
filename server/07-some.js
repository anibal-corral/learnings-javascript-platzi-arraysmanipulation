const numbers =[1,2,3,4];
//OLD
let answer = false;
for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    if(element %2 ===0){
        answer =true;
        break;
    }    
}
console.log(answer);

//WITH SOME
const answerSome = numbers.some(item => item%2===0);
console.log(answerSome);