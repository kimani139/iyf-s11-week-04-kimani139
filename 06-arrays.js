console.log("\n=== Task 8.1: Arrays ===");

// --- Exercise 1: Array Basics ---
const fruits = ["apple", "banana", "orange"];
const numbersBasic = [1, 2, 3, 4, 5];
const mixed = ["hello", 42, true, null];

console.log(fruits[0]);     // apple
console.log(fruits.length); // 3

fruits.push("grape");        // ["apple","banana","orange","grape"]
fruits.unshift("mango");     // ["mango","apple","banana","orange","grape"]
fruits.pop();                // removes "grape"
fruits.shift();               // removes "mango"
console.log("fruits after mutations:", fruits);

// --- Exercise 2: Array Methods ---
const numbers = [1, 2, 3, 4, 5];

numbers.forEach((num) => console.log("forEach:", num * 2));

const doubled = numbers.map((num) => num * 2);
const evenNumbers = numbers.filter((num) => num % 2 === 0);
const firstEven = numbers.find((num) => num % 2 === 0);
const sum = numbers.reduce((total, num) => total + num, 0);

console.log("doubled:", doubled);
console.log("evenNumbers:", evenNumbers);
console.log("firstEven:", firstEven);
console.log("sum:", sum);
console.log("includes(3):", numbers.includes(3));

// --- Build ---
const mixedNumbers = [-5, 3, 12, -8, 20, 7];

// 1. Double all numbers
const doubledAll = mixedNumbers.map((n) => n * 2);
console.log("1. Doubled:", doubledAll);

// 2. Filter out negative numbers
const nonNegative = mixedNumbers.filter((n) => n >= 0);
console.log("2. Non-negative:", nonNegative);

// 3. Find first number greater than 10
const firstOver10 = mixedNumbers.find((n) => n > 10);
console.log("3. First > 10:", firstOver10);

// 4. Product of all numbers
const product = mixedNumbers.reduce((total, n) => total * n, 1);
console.log("4. Product:", product);
