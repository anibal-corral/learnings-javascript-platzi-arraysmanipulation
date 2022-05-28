
const numbers = [1,3,2,3];
const countNumbers=numbers.reduce((obj, item)=>{
    ;
if(!obj[item]){
    obj[item]=1;
}else{
    obj[item]=obj[item]+1;
}
},{});

console.log(countNumbers);

const data = [
    {
      name: "Nicolas",
      level: "low",
    },
    {
      name: "Andrea",
      level: "medium",
    },
    {
      name: "Zulema",
      level: "hight",
    },
    {
      name: "Santiago",
      level: "low",
    },
    {
      name: "Valentina",
      level: "medium",
    },
    {
      name: "Lucia",
      level: "hight",
    },
  ];

  const levels=data.map(item=>item.level)
  .reduce((obj, item)=>{
    ;
if(!obj[item]){
    obj[item]=1;
}else{
    obj[item]=obj[item]+1;
}
},{});

console.log(levels);