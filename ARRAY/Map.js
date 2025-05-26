let arr=[1,5,6,8,9]
//1 type
// function double(x){
//     return x*2
// }

// const b=arr.map(double)
// console.log(b)
//
//2 type
// const b=arr.map(function double(x){
//     return x*2
// })
// console.log(b)


//3type
const b=arr.map((x)=>{
    return x*2
})
console.log(b)

//4 type
const a=arr.map(x=>x*2)
console.log(a)