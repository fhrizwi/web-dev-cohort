// Section 4: Higher Order Functions 

// Q7. Create a function called operate that takes two numbers and a function. It should 
// return the result of the function applied to the numbers. 

function operate(a, b, operation) {
  return operation(a, b);
}


const add = (x, y) => x + y;
const multiply = (x, y) => x * y;

console.log(operate(4, 5, add));      // Output: 9
console.log(operate(4, 5, multiply)); // Output: 20
