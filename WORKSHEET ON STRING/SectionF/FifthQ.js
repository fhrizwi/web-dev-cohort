// 5. Given a string: "JavaScript is Awesome", convert it to: 
// a. All lowercase 
// b. All uppercase 
// c. Replace "Awesome" with "Powerful" 
// d. Check if the string starts with "Java" 

const str="JavaScript is Awesome"
console.log(str.toUpperCase())
console.log(str.toLowerCase())
console.log(str.replace("Awesome","Powerful"))
console.log(str.startsWith("Java"))

//Output:
// 1.JAVASCRIPT IS AWESOME
// 2.javascript is awesome
// 3.JavaScript is Powerful
// 4.true