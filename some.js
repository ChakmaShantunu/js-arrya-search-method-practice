//Negative Number Check at least one
const numbers = [3, 7, -2, 8, 10];
const negativeNum = numbers.some(num => num < 0);
console.log(negativeNum);

//Long String Check
const pets = ["cat", "elephant", "dog", "rat"];
const longPet = pets.some(pet => pet.length > 3)
console.log(longPet);



