// 7. Write a function that takes a number as input and determines if it is between 1 and 
// 10

function checkLength(num){
    if(num>=1 && num<=10){
        console.log("Number is between 1 to 10")
    }else{
        console.log("Number is not lie between 1 to 10")
    }
}
checkLength(5)
checkLength(1)
checkLength(11)
checkLength(10)
checkLength(9)
checkLength(15)
