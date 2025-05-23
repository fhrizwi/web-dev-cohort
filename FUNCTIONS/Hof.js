// //A Higher-Order Function (HOF) is a function that either:
// Takes another function as an argument, or
// Returns another function.

//Example 1: HOF takes a function as an argument

function greet(name) {
  return "Hello " + name;
}

function processUser(name, callback) {
  return callback(name);
}

console.log(processUser("Alpha Intern", greet)); 
// Output: Hello Alpha Intern





// Example 2: HOF returns a function

function multiplier(factor) {
  return function(num) {
    return num * factor;
  };
}

const double = multiplier(2);
console.log(double(5)); // Output: 10



// Arrow Function HOF Example

const applyOperation = (a, b, operation) => operation(a, b);
const add = (x, y) => x + y;
console.log(applyOperation(3, 4, add)); // Output: 7
