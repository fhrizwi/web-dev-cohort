// Create an object person with two properties, "name" and "age", and then update the "age" property to a new value. Initial age should be 30.

const person={
    name:"Golden",
    age:30
}
function changeAge(personObj,newAge){
    personObj.age=newAge
    return personObj
}
console.log(changeAge(person,"35"))////{ name: 'Golden', age: '35' }