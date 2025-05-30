//syntax of promises
// let myPromise=new Promise(function(resolve,reject){
//     console.log("Hello")
// })
// console.log(myPromise)



//Used resolve()   key without value
// let myPromise=new Promise(function(resolve,reject){
//     console.log("Hello")
//     resolve()
// })
// console.log(myPromise)


// let myPromise=new Promise(function(resolve,reject){
//     console.log("Hello")
//     // resolve(100)         //with value
//     reject(new Error("Internal Server Error Bro"))      //for error
// })
// console.log(myPromise)


//Using arrow function
// let firstPromise=new Promise((resolve,reject)=>{
//     setTimeout(function sayHello(){
//         console.log("Hello")
//     },3000)
// })
// console.log(firstPromise)



let firstPromise = new Promise((resolve, reject) => {
    setTimeout(function sayHello() {
        console.log("Hello");
        resolve("Golden"); // Resolve the promise after logging
    }, 3000);
});

firstPromise.then((value) => {
    console.log("Resolved with:", value);
});

