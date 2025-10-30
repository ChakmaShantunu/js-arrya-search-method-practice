
// Object array-এ find(id == 2)

const users = [
    { id: 1, name: "Shantunu" },
    { id: 2, name: "Ersa" },
    { id: 3, name: "Rakib" }
];

const foundUser = users.find(user => user.id === parseInt("1")) // this is better because it's code predictable, dynamic input, user-driven data
// const foundUser = users.find(user => user.id === 2)
console.log(foundUser);

//Find First Even Number
const numbers = [1, 3, 7, 8, 10, 13];

const firstEven = numbers.find(num => num % 2 === 0)
console.log(firstEven);

//Find First Negative Number

const nums = [4, 6, -1, 9, -3];
const firstNegative = nums.find(num => num < 0)
console.log(firstNegative);

//Find a Fruit Named “Mango”
const fruits = ["apple", "banana", "mango", "orange"];
const mango = fruits.find(fruit => fruit === "mango")
console.log(mango);

//Find a Student with Marks Greater Than 80
const students = [
    { name: "Rafi", marks: 75 },
    { name: "Nila", marks: 82 },
    { name: "Sajid", marks: 68 },
];

const aplusStudent = students.find(student => student.marks > 80)
console.log(aplusStudent);

//Find a Product Whose Price is Less Than 500
const products = [
    { name: "Keyboard", price: 700 },
    { name: "Mouse", price: 450 },
    { name: "Monitor", price: 800 },
];

const lowestProduct = products.find(product => product.price < 500)
console.log(lowestProduct);

//Find the First Person Aged 30 or More
const people = [
    { name: "Tuhin", age: 22 },
    { name: "Mira", age: 28 },
    { name: "Jony", age: 31 },
];

const firstPerson = people.find(person => person.age >= 30)
console.log(firstPerson);

//Find a City that Starts with “S”
const cities = ["Dhaka", "Sylhet", "Chittagong", "Khulna"];

const sCity = cities.find(city => city.startsWith("S"))
console.log(sCity);
