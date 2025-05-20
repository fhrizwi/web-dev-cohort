//Determine the types of triangle based on the side length

const s1 = 3
const s2 = 4
const s3 = 5

if (s1 === s2 && s2 === s3) {
    console.log("Equilateral Triangle");
} else if (s1 === s2 || s2 === s3 || s1 === s3) {
    console.log("Isosceles Triangle");
} else {
    console.log("Scalene Triangle");
}

