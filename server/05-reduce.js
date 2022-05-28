//REDUCE DEVUELVE SOLO UN VALOR
const totals = [1,2,3,4];
let sum = 0;
for (let index = 0; index < totals.length; index++) {
    const element = totals[index];
    sum = sum + element;
    
}
console.log(sum);

const reducedTotals = totals.reduce((acumulador,item)=>acumulador+item,0);
console.log(reducedTotals);