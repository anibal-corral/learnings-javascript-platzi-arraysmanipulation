const numbers =[1,2,3,4];
//OLD
let answer = false;
for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    if(element >=40){
        answer =true;
        break;
    }    
}
console.log(answer);

//WITH SOME
const answerEvery = numbers.every(item =>item<=40);
console.log(answerEvery);