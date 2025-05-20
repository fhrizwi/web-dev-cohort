//Check Wheather a character is alphabet or not

const char='g'
const ascii=char.charCodeAt(0)
if((ascii>=65 && ascii<=90) || (ascii>=97 && ascii<=122)) {
    console.log("It is an Alphabet")
}else{
    console.log("It is not an Alphabet")
}