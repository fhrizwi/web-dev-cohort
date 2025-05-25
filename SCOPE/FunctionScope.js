function test() {
    var message = "hello";
    console.log(message); //  This works
}

test(); // Call the function to see "hello"

console.log(message); //  ReferenceError: message is not defined
