// Arrow Functions
// Shorter way to write functions. Automatically binds "this".

// Normal function
function add(a, b) {
  return a + b;
}

// Arrow function
const addArrow = (a, b) => a + b;

console.log(add(2, 3));       
console.log(addArrow(2, 3));  
// both will display 5