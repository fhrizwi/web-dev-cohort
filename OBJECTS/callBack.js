//callBack

function greet(name, callBack){
    console.log("Hello", name)
    callBack()
}

function sayBye(){
    console.log("Good Bye")
}

greet("Faizul Haque Rizwi",sayBye)

//addition multiplication callback
function calculate(a,b, callBack){
    return callBack(a,b)
}

function add(x,y){
    return x+y
}

function mul(x,y){
    return x*y
}

console.log(calculate(4,5,add))
console.log(calculate(4,5,mul))