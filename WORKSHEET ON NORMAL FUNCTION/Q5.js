// 5. Write a function that takes a string as input and determines if it contains the letter 'a' 
// or ‘A’. 

function containsA(str) {
    if (str.includes('a') || str.includes('A')) {
        console.log("The string contains 'a' or 'A'");
    } else {
        console.log("The string does NOT contain 'a' or 'A'");
    }
}

// Function calls:
containsA("Apple");     // Output: The string contains 'a' or 'A'
containsA("Banana");    // Output: The string contains 'a' or 'A'
containsA("Hello");     // Output: The string does NOT contain 'a' or 'A'
