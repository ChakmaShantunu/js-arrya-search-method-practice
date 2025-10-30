//Check if all numbers in an array are positive
const numbers = [2, 5, 8, 10];
const positive = numbers.every(num => num > 0)
console.log(positive);

//Check if all strings in an array have length greater than 3
const words = ["JavaScript", "React", "Node", "CSS"];
const longStrings = words.every(word => word > 3)
console.log(longStrings);