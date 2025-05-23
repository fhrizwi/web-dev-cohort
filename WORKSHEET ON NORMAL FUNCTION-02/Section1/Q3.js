// Q3. Create a one-liner arrow function that returns "Even" if a number is divisible by 2, 
// else returns "Odd". 

const isEven = num => num % 2 === 0 ? "Even" : "Odd";

console.log(isEven(5)); // Output: Odd
console.log(isEven(8)); // Output: Even
