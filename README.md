# COS209-assignment
1. Classes
* A class is a blueprint for creating objects.
* It uses the `constructor` method to set properties, and you can add methods inside.
* Makes object-oriented programming easier and cleaner.

2. Arrow Functions
* A shorter way to write functions using `=>`.
* They don’t create their own `this`, which makes them handy inside objects and callbacks.
* Example: `(a, b) => a + b`.

3. Variables (`let`, `const`, `var`)
* `let` → block-scoped, can be reassigned.
* `const` → block-scoped, cannot be reassigned.
* `var` → function-scoped (older, less safe).
* Best practice: use `let` and `const`.

4. Array Methods
* Built-in methods to work with arrays easily.
* Common ones:
  * `map()` → transforms each item.
  * `filter()` → keeps items that match a condition.
  * `find()` → gets the first matching item.
* Example: `numbers.map(num => num * 2)`.

5. Destructuring
* A shortcut for unpacking values from arrays or objects into variables.
* Makes code cleaner and avoids repetition.
* Example:
  const { name, age } = person;
  
6. Modules
* Let you split your code into separate files and reuse functions or classes.
* `export` something from one file, `import` it in another.
* Keeps projects organized.

7. Ternary Operator
* A short if-else statement in one line.
* Syntax: `condition ? valueIfTrue : valueIfFalse`.
* Example: `age >= 18 ? "Adult" : "Minor"`.

8. Spread Operator (`...`)
* Expands arrays or objects.
* Useful for merging arrays, copying objects, or passing arguments.
* Example: `[...arr1, ...arr2]`.
Would you like me to also create a **one-page summary file** (`es6-cheatsheet.js`) that contains all explanations + examples together, so you can use it as a quick reference?
