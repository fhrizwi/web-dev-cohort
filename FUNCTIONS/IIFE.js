//IIFE stands for Immediately Invoked Function Expression
//basic syntax
(function() {
  // code here
})();


//example
(function() {
  console.log("Hello");
})(); // Output: Hello


//IIFE with parameters:
(function(name) {
  console.log("Hello " + name + "!");
})("Alpha Intern"); // Output: Hello Alpha Intern!


// Arrow Function IIFE:
(() => {
  console.log("Hello");
})(); // Output: Hello



const square=(function(x){
    return x*x
})(5)
console.log(square)

