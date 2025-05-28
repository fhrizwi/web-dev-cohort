const person={
    name:"Faizul",
    age:23,
    department:"CSE"
}

function changeDepartment(personObj,newDepartment){
    personObj.department=newDepartment
    return personObj
}
console.log(changeDepartment(person,"MBBS"))  //{ name: 'Faizul', age: 23, department: 'MBBS' }