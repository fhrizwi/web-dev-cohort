const greet = function() {
  console.log("Hello!");
};

greet(); // Output: Hello!
//This is a function expression because:
// A function is created.
// It’s assigned to the variable greet.


// Function Expression with Parameters:
const greet1 = function(name) {
  console.log("Hello " + name + "!");
};

greet("Alpha Intern"); // Output: Hello Alpha Intern!



// Arrow Function Expression (Modern syntax):
const greet4 = (name) => {
  console.log("Hello " + name + "!");
};

greet("Alpha Intern"); // Output: Hello Alpha Intern!




