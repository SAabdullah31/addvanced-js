 const numbers=[2,3,4,5,6,7,8,9];
// const output =[];

// for (let i=0;i<numbers.length;i++){
//     const element=numbers[i];
//     const result =element * element;
//     output.push(result);
// }
// const total =numbers => element * element;
// const resullt2 =x =>x * x;
// function square(element){
//     return element * element;
// }
 //const result =numbers.map(x => x * x);
    
//console.log(result);
const bigger= numbers.filter(x => x<2);
console.log(bigger);
const isThere =numbers.find(x=> x>8);
console.log(isThere);