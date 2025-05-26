//find positive number

const arr=[-4,-6,-9,4,6]
const a=arr.filter(num=>num>0)
// console.log(a)  //[ 4, 6 ]

//find even number
let arr1=[1,5,6,8,10]
const c=arr1.filter(n=>n%2===0)
console.log(c)


//array of string
let arr3=[1,"Faizul Haque", 44,"Hello", "Hii"]
let d=arr3.filter(item=>typeof item==="string")
console.log(d)


//filter the item whose starting letter is a
const arr4=["apple","hii","ajj","hello","aap","alpha"]
let e=arr4.filter(word=>word.startsWith("a"))
console.log(e)