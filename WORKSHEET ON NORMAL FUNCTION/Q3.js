// 3. Write a function that takes a number as input and determines if it is positive or 
// negative. 

function checkNumber(num1) {
    if (num1 >= 0) {
        console.log("It is Positive");
    } else {
        console.log("It is Negative");
    }
}

//calls:
checkNumber(5);   // Output: It is Positive
checkNumber(-3);  // Output: It is Negative
checkNumber(0);   // Output: It is Positive
