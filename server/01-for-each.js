const letters = ['a','b','c'];
//ODL FOR LOOP
for(let index =0;index<letters.length;index++){
    const element = letters[index];
    console.log(element);
}
//NEW FOR LOOP
letters.forEach((element)=>console.log(element))

const products = [
    {title:'Burger', price:121},
    {title:'Pizza', price:20},
];
const app = document.getElementById('app');
products.forEach(product=>{
    app.innerHTML +=`<li>${product.title}</li>`
})