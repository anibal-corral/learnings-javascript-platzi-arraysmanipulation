const letters = ['a','b','c'];
//OLD WAY
const newLetters =[];
for(let index =0;index<letters.length;index++){
    const element = letters[index];
    newLetters.push(element +"++");
}
console.log('Original',letters);
console.log('New', newLetters);
//NEW WAY WITH MAP
const lettersMap = letters.map(item=>item+'++');
console.log('Letters Map', lettersMap);

const products = [
    {title:'Burger', price:121},
    {title:'Pizza', price:20},
];
const app = document.getElementById('app');
const list = products.map(product=>{
    return`<li>${product.title}</li>`
});
app.innerHTML = list.join(''); 