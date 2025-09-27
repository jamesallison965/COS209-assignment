// Spread Operator (...)
// Allows expanding arrays or objects.

// Example with arrays
const nums1 = [1, 2, 3];
const nums2 = [4, 5, 6];

// Merge arrays
const merged = [...nums1, ...nums2];
console.log(merged); // [1, 2, 3, 4, 5, 6]

// Example with objects
const person = { name: "Tom" };
const details = { age: 30 };
const combined = { ...person, ...details };

console.log(combined); // { name: "Tom", age: 30 }
