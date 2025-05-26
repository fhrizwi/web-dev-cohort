const words = ["apple", "banana", "grapes", "cat", "elephant", "bat"];

const result = [];

for (let i = 0; i < words.length; i++) {
    if (words[i].length > 5) {
        result.push(words[i]);
    }
}

console.log(result);
// Output: ["banana", "grapes", "elephant"]
