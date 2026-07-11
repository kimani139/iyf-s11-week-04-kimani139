console.log("=== Task 7.1: Variables ===");

// Variable declarations
let name = "Jordan";
let age = 25;
const birthYear = 1999;

// typeof operator
console.log(typeof name);    // string
console.log(typeof age);     // number
console.log(typeof true);    // boolean

// let vs const
let score = 100;
score = 150; // Works!
console.log("score reassigned:", score);

const PI = 3.14159;
// PI = 3; // Error! const cannot be reassigned

// --- Exercise: Variable Practice ---
let myName = "Jordan";
let myAge = 25;
let isStudent = true;
let favoriteColors = ["blue", "green", "purple"];
let today = new Date();

console.log(`My name is ${myName}`);
console.log(`My age is ${myAge}`);
console.log(`Am I a student? ${isStudent}`);
console.log(`My favorite colors are: ${favoriteColors.join(", ")}`);
console.log(`Today's date is ${today.toDateString()}`);
