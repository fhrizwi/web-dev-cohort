// //5. Write a function that takes a string input and returns the number of times "Alpha" appears 
// using replaceAll() and length. 

function countAlphaOccurrences(str) {
    const originalLength = str.length;
    const modifiedStr = str.replaceAll("Alpha", "");
    const newLength = modifiedStr.length;
    const count = (originalLength - newLength) / "Alpha".length;
    return count;
}

const input = "Alpha is great. Alpha loves coding. AlphaAlpha";
console.log(countAlphaOccurrences(input)); 

// Output: 4
