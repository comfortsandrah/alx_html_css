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


const userName = prompt('Please enter your name:');
const userAge = prompt('Please enter your age:');

const year = new Date().getFullYear();
const yearOfBirth = year - userAge;

alert(`Your name is ${userName} and your year of birth is ${yearOfBirth}`);
