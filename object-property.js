const newArray=[];

const student =[
    {id :21,name:"ami"},
    {id :31,name:"omar sunny"},
    {id :41,name:"karim uddin"},
    {id :51,name:"mahia"},
    {id :71,name:"Dipjol"},
]

// for (let i=0; i<student.length;i++){
//     element =student[i];
//     const result= newArray.push(element);
// }
// console.log(newArray);
const names =student.map(s=>s.names);
const ides=student.map(s=>s.id);
const bigger =student.filter(s=>s.id>40);
const biggerOne=student.find(s =>s.id>40);
console.log(biggerOne);
