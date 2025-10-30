//Check if all numbers in an array are positive
const numbers = [2, 5, 8, 10];
const positive = numbers.every(num => num > 0)
console.log(positive);

//Check if all strings in an array have length greater than 3
const words = ["JavaScript", "React", "Node", "CSS"];
const longStrings = words.every(word => word > 3)
console.log(longStrings);

//Check if all students have marks greater than 50
const students = [
    { name: "Rafi", marks: 75 },
    { name: "Nila", marks: 82 },
    { name: "Sajid", marks: 68 }
];
const goodMarks = students.every(student => student.marks > 50)
console.log(goodMarks);

//Check if all products have stock > 0
const products = [
    { name: "Keyboard", stock: 5 },
    { name: "Mouse", stock: 3 },
    { name: "Monitor", stock: 2 }
];
const stockProducts = products.every(product => product.stock > 0)
console.log(stockProducts);