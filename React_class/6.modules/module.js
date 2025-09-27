// Modules
// Helps to organize code by splitting it into separate files.

// file: math.js
export const add = (a, b) => a + b;
export const multiply = (a, b) => a * b;

// file: main.js
// import functions from math.js
import { add, multiply } from "./math.js";

console.log(add(2, 3));       //will display 5
console.log(multiply(2, 3));  //will display 6
