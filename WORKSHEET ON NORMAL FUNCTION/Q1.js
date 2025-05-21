// 1. Write a function that takes person age as a number as input and determines, person 
// are eligible or not for voting. 

function checkEligibility(age) {
    if (age >= 18) {
        console.log("Eligible");
    } else {
        console.log("Not Eligible");
    }
}

checkEligibility(20);       // Output: Eligible
checkEligibility(16);       // Output: Not Eligible

// let userAge = prompt("Enter your age:");
// checkEligibility(Number(userAge));








// function checkEligibility() {
//     let userAge = prompt("Enter your age:");
//     userAge = Number(userAge);       // Convert string to number

//     if (userAge >= 18) {
//         console.log("Eligible");
//     } else {
//         console.log("Not Eligible");
//     }
// }

// // Call the function
// checkEligibility();
