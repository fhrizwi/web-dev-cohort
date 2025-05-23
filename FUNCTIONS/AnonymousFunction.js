//anonymous function without a name
const a=function(){
    console.log("Hello")
}
a()



const example = function() {
  // code here
};




const greet = function() {
  console.log("Hello!");
};
greet(); // Output: Hello!



//You can also pass anonymous functions as arguments:
setTimeout(function() {
  console.log("This is an anonymous function!");
}, 1000);



//If you want the arrow function version (also anonymous), the syntax is:
const examplee = () => {
  // code here
};




const add=function(a,b){
    return a+b
}
console.log(add(4,5))




const greet1 = function() {
  console.log("Hello Alpha Intern!");
};

greet(); // Output: Hello Alpha Intern!



//With a parameter:
const greet2 = function(name) {
  console.log("Hello " + name + "!");
};

greet("Alpha Intern"); // Output: Hello Alpha Intern!




const greet4 =(name)=>`Hello ${name}`
console.log(greet4("Alpha Intern")) 

