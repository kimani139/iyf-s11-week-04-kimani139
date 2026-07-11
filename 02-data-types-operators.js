console.log("\n=== Task 7.2: Data Types & Operators ===");

// --- Exercise 1: Number Operations ---
let a = 10;
let b = 3;

console.log(a + b);   // 13
console.log(a - b);   // 7
console.log(a * b);   // 30
console.log(a / b);   // 3.333...
console.log(a % b);   // 1
console.log(a ** b);  // 1000

let count = 0;
count++;
console.log("count after ++:", count); // 1
count--;
console.log("count after --:", count); // 0

// --- Exercise 2: String Operations ---
let firstName = "John";
let lastName = "Doe";

let fullName = firstName + " " + lastName;
let greeting = `Hello, ${firstName}!`;
let message = `Your name has ${firstName.length} characters.`;

console.log(fullName);
console.log(greeting);
console.log(message);
console.log(fullName.toUpperCase());
console.log(fullName.toLowerCase());
console.log(firstName.charAt(0));
console.log(fullName.includes("John"));

// --- Exercise 3: Comparison & Logical Operators ---
console.log(5 > 3);    // true
console.log(5 < 3);    // false
console.log(5 === 5);  // true
console.log(5 == "5"); // true (loose equality - avoid!)
console.log(5 !== 3);  // true

console.log(true && true);   // true
console.log(true || false);  // true
console.log(!true);          // false

// --- Challenge ---
const myAgeYears = 25;
const ageInDays = Math.floor(myAgeYears * 365.25);
const ageInHours = ageInDays * 24;
const currentYear = new Date().getFullYear();
const yearTurn100 = currentYear - myAgeYears + 100;

console.log(`Age in days (approx): ${ageInDays}`);
console.log(`Age in hours (approx): ${ageInHours}`);
console.log(`I'll turn 100 in: ${yearTurn100}`);
