// 2. Write a function that takes two numbers as input and determines which one is 
// greater.

function findGreater(num1, num2) {
    if (num1 > num2) {
        console.log(num1 + " is greater");
    } else if (num2 > num1) {
        console.log(num2 + " is greater");
    } else {
        console.log("Both numbers are equal");
    }
}

// function calls:
findGreater(10, 5);   // Output: 10 is greater
findGreater(7, 15);   // Output: 15 is greater
findGreater(8, 8);    // Output: Both numbers are equal
