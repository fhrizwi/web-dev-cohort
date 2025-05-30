//setTimeout

//Method-1
function Hello(){
    console.log("Faizul")
}
setTimeout(Hello,10000)    //10second //1 second =1000 milisecond


//Method-2
setTimeout(function Hello(){
    console.log("Haque")
},10000)                                    //10 second baad output dega

//Method-3
setTimeout(()=>{
    console.log("Rizwi")
},10000)



//setInterval
setInterval(()=>{
    console.log("Rizwi")
},1000)                         //1-1 second baad output dega loop me 




// console.log("Faizul")
// console.log("Haque")

// setTimeout(()=>{
//     console.log("Rizwi")
// },10000)

// console.log("end")