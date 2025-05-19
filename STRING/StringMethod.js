// //Concat Method
// const a="Faizul"
// const b="Haque"
// const result=a.concat(' ' ,b)
// console.log(result)

// //toUpperCase and toLowerCase
// const c=a.toUpperCase()
// const d=a.toUpperCase()
// console.log(c)
// console.log(d)

//Split Method
const a="Faizul"
console.log(a.split())      
console.log(a.split(" "))
console.log(a.split(""))



let role="admin, editor, viewer"
console.log(role.includes("editor"))


let file="report.pdf"
console.log(file.endsWith(".pdf"))


let text="hello name"
console.log(text.replace("name","Faizul"))


let str="Faizul Haque"
console.log(str.slice(0,8))
console.log(str.slice(5))
console.log(str.slice(-6))
//console.log(str1.slice(-3,5))  it gives error bocoz starts>end value
console.log(str.slice(0,-6))

let str1="Faizul Haque"
console.log(str1.substring(0,5))
console.log(str1.substring(5,0))        //if start>end =>(0,5)it will be treated as 0,5
console.log(str1.substring(5))
console.log(str1.substring(-3,5))       //-ve value treated as 0





