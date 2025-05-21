// 8. Write a function that takes a string as input and determines if it contains the word 
// "hello 

function contain(str) {
    if (str.includes("hello")) {
        console.log("Yes It contain hello word")
    } else {
        console.log("It doesn't contain the word hello ")
    }
}
contain("hi hello dear")
contain("good morning Faizul")
contain("hello mam")
contain("hello world");      
contain("Hi there!");        