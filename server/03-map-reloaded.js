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
// console.log(orders);
  const newOrders=orders.map(item=>item.total);
//   console.log(newOrders);

  //MODIFICAR LOS ARAYS 
  //DE ESTA FORMA MODIFICA EL ORIGINAL TAMBIEN
  const newOrdersModified=orders.map(item=>{
      item.tax =.19;
      return item;
    });
    //DE ESTA FORMA NO MOIFICA EL ORIGINAL PORQUE CREA OTRO ARRAY
    const newOrdersModifiedWell=orders.map(item=>{
        return {...orders, tax:.19}
      });
      