const obj = {
    name: "Faizul Haque",
    age: 23

}
// const person={name:"Golden",age:23}   //is type se v kar sakte hai

// console.log(obj.name)   
console.log(obj["name"])




//Nested Object

const obj1 = {
    name: "Faizul Haque",
    age: 23,
    marks: {
        dsa: 70,
        java: 50
    }
}
console.log(obj1.marks)
console.log(obj1.marks.java)



//Also Using Function
// const obj5 = {
//     name: "Faizul",
//     age: 23,
//     greet: function () {console.log("hello")},
//     hobbies:["gaming","drawing"]

// }
// obj5.greet()
// console.log(obj5.hobbies)
// console.log(obj5.hobbies[1])



//using this keyword
const obj6 = {
    name: "Faizul",
    age: 23,
    greet: function () {console.log(this.name)},
    hobbies:["gaming","drawing"]

}
obj6.greet()
console.log(obj6.hobbies)
console.log(obj6.hobbies[1])

