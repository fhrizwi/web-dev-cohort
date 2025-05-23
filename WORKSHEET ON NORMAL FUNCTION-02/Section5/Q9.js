// Q9. Write an IIFE that takes a number and logs its factorial.

(function(num) {
  let fact = 1;
  for (let i = 1; i <= num; i++) {
    fact *= i;
  }
  console.log(`Factorial of ${num} is ${fact}`);
})(5); // Change 5 to any number
