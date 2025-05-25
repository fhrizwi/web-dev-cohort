// let a=4
// function fun(){
//     let a=5
//     console.log(a)
// }
// fun()


// let a=100

// function App(){
//     console.log("1",a)
//     let a=42
//     console.log("2",a)
//     {
//         let a=100
//     }
//     console.log("3",a)
// }


let a=100

function App(){
    console.log("1",a) //100
    let a=42
    console.log("2",a) //42
    {
        let v=100
    }
    console.log("3",v) //error
}                                   //DOUBT

if(true){
    let z=2
}
console.log(z)//becoz let ko function ke andar hi print krte hai