{
    let a = 45
    console.log(a)
}



// block scope ko bahar se access nahi kr sakte hai
// {
//     let a = 45
// }
//     console.log(a)

// block scope ko bahar se access nahi kr sakte hai

// {
//     const x=45
// }
// console.log(x)

{
    var y = 45
}
console.log(y)

if (true) {
    let age = 20
    const city = "delhi"
}
console.log(age, city) // because let const ko inside the function hi print karwa sakte hai



if (true) {
    var age = 20
    var city = "delhi"
}
console.log(age, city) //becoz var ko outside the function print krwa sakte hai