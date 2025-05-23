// function add(a,b){
//     return a+b
// }



// //arrow function
// const a=(a,b)=>{
//     return a+b
// }

// const z=(a,b)=>a+b
// console.log(z(4,5))



//arrow function with one parameter
const square =x=>x*x
console.log(square(5))


//Ques: check wheather a number is even
const isEven=num=>num%2===0
console.log(isEven(5)) 


//Ques: String AlphaIntern return first character of the string
const firstChar=str=>str[1]
console.log(firstChar("AlphaIntern"))


//Ques: Return the length of string
const strLength=str=>str.length
console.log(strLength("Alpha"))

//Ques: hii ko HII me convert
const strUppercase=str=>str.toUpperCase();
console.log(strUppercase("faizul"))


//Ques: Check Wheather a string contain "a" or not 
//return true if contain "a" or return false if not 
const strContain=str=>str.includes("a")
console.log(strContain("Faizul"))


