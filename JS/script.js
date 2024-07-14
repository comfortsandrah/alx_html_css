const name = "Sandrah";
console.log(name, typeof name);

const age = 19;
console.log(age, typeof age);

const isStudent = true;
console.log(isStudent, typeof isStudent);


const address = {
    city: "Nairobi",
    country: "Kenya",
}
console.log(address, typeof address);

const hobbies = ["singing", "coding", "dancing", "reading"];
console.log(hobbies, typeof hobbies);


let undefinedVariable;
console.log(undefinedVariable, typeof undefinedVariable);

let nullVariable = null;
console.log(nullVariable, typeof nullVariable);


// const userName = prompt('Please enter your name:');
// const userAge = prompt('Please enter your age:');

// const year = new Date().getFullYear();
// const yearOfBirth = year - userAge;

// alert(`Your name is ${userName} and your year of birth is ${yearOfBirth}`);

// Conditional Logic Practice
// Write a script to check if a number is positive, negative, or zero and print an appropriate message to the console.
const number = 20 ;
if (number > 0) {
    console.log('The number is positive');
} else if (number < 0) {
    console.log('The number is negative');
} else {
    console.log('The number is zero');
}



// Looping Through Numbers
// Use a for loop to print numbers 1 through 10 to the console.
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// Basic Function Creation
// Write a function that takes two numbers as parameters and returns their sum.
function sum(num1, num2) {
    return num1 + num2;
}
result = sum(10, 20);
console.log(result);

// arrow function
const mySum = (num1, num2) => num1 + num2;
console.log(mySum(10, 20));