//4. Capitalize the first letter of each word in a sentence.

function capitalizeWords(sentence) {
    return sentence
        .split(" ")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
}

const str = "i love programming";
console.log(capitalizeWords(str));

//Output- I Love Programming
