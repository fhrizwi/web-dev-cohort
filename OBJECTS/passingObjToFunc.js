//1.Create an object book with properties title, author, and pages. Create a function getBookDetails.

const book = {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    totalPages: 281
}
function getBookDetails(obj){
    return `${obj.title} ${obj.author} ${obj.totalPages}`
}
console.log(getBookDetails(book)) // 
//To Kill a Mockingbird Harper Lee 281
