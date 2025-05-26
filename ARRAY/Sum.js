//adding elements

// let arr=[4,5,6]
// let sum=0
// for(let i=0; i<arr.length; i++){
//     sum+=arr[i]
// }
// console.log(sum)


//adding even index 0+2+4=4+6+8=18
let arr1 = [4, 5, 6, 7, 8]
let sum1 = 0
for (let i = 0; i < arr1.length; i += 2) {
    sum1 += arr1[i]
}
console.log(sum1)