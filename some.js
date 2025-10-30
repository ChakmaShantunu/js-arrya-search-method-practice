//Negative Number Check at least one negative number
const numbers = [3, 7, -2, 8, 10];
const negativeNum = numbers.some(num => num < 0);
console.log(negativeNum);

//Long String Check any string has more than 5 characters
const pets = ["cat", "elephant", "dog", "rat"];
const longPet = pets.some(pet => pet.length > 3)
console.log(longPet);

//Adult Age Check any age is 18 or older
const ages = [12, 17, 20, 15];
const adult = ages.some(age => age > parseInt(18))
console.log(adult);

//Even Number Check any number is even
const allNumbers = [1, 3, 7, 9, 10];
const evenNum = allNumbers.some(num => num % 2 === 0)
console.log(evenNum);

//Expensive Product Check if any product has price > 1000.
const products = [
    { name: "Keyboard", price: 500 },
    { name: "Monitor", price: 1500 },
    { name: "Mouse", price: 300 }
];
const expensive = products.some(product => product.price > 1000)
console.log(expensive);