// Template Literal instead of concatenation("+")
// BackTick-(` ${a}`)

const a="hello"
console.log(`world ${a}`)


const name="Faizul"
console.log(`Haque ${name}`)

//poora poora line leta hai when we use backtick
const b=`hello
faizul
haque`
console.log(b)

//Indexing
let str="Golden"
console.log(str[0])

str[0]=`g`   //string in js is immutable
console.log(str)


// const y="hii"    it gives an error but agar yaha p mai let ka use krta tab sahii hota
// y="hello"
// console.log(y)

//jaise ye sahi hai
//let y="hii"
//y="hello"
//console.log(y)


const y="a"
const z="A"
console.log(y===z)  //they both are different bcoz of ASCII value




