//3. Check whether a given string is a palindrome or not. 

const str = "madam";
const reversed = str.split("").reverse().join("");

if (str === reversed) {
  console.log("Palindrome");
} else {
  console.log("Not a palindrome");
}

//Output- Palindrome