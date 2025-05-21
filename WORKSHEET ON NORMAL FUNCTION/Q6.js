// 6. Write a function that takes a string as input and determines if it is longer than 5 
// characters 

function checkChar(str) {
    if (str.length > 5) {
        console.log("The string is longer than 5 characters");
    } else {
        console.log("The string is 5 characters or shorter");
    }
}


checkChar("Hello");      // Output: The string is 5 characters or shorter
checkChar("Welcome");    // Output: The string is longer than 5 characters
