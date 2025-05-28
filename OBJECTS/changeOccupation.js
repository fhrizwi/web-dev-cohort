// Create a function changeOccupation that takes an object person and a string newOccupation as parameters, and changes the occupation property of the person object to the newOccupation.


// Example usage:
// const person = {
//   name: "Alice",
//   age: 28,
//   occupation: "Engineer"
  
// };
// function changeOccupation(person, newOccupation) {
//   person.occupation = newOccupation;
// }

// // console.log("Before:", person);
// changeOccupation(person, "Designer");
// // console.log("After:", person);


const person = {
  name: "Alice",
  age: 28,
  occupation: "Engineer"
};

function changeOccupation(person, newOccupation) {
  person.occupation = newOccupation;
}

changeOccupation(person, "Designer");
console.log(person)
