const words = ['spray', 'limit', 'elite', 'exuberant'];

//FILTER USED IN OLD WAY
const newArray =[];
for (let index = 0; index < words.length; index++) {
    const element = words[index];
  if (element.length>6) {
    newArray.push(element)
  }
}
// console.log('newArray',newArray);
// console.log('original',words);

//USING FILTER
const wordsFilter = words.filter(item=>item.length>=6);
console.log('wordsFilter',wordsFilter);
console.log('words',words);

//FILTER OBJECTS
const orders = [
    {
      customerName: "Anastasia",
      total: 60,
      delivered: true,
    },
    {
      customerName: "Erminda",
      total: 120,
      delivered: false,
    },
    {
      customerName: "Daniela",
      total: 180,
      delivered: true,
    },
    {
      customerName: "Valentina",
      total: 240,
      delivered: true,
    },
  ];
  const ordersFiltered=orders.filter(order=>order.delivered);
  console.log(ordersFiltered);


  //SEARCHING WITH FILTERS
  const search =(query)=>{
      return orders.filter(item =>{
          return item.customerName.includes(query);
      })
  }
  console.log(search('ti'));
