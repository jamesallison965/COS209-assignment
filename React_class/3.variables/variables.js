// Variables
// let = can be reassigned (block-scoped)
// const = cannot be reassigned (block-scoped)
// var = the old way, its not recommended (function-scoped)

let fname = "John"; 
const age = 25;    

fname = "Jane"; 
age = 30;   

console.log(fname); //will display Jane
console.log(age);  //will not display 30
