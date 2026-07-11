console.log("\n=== Task 7.3: Functions ===");

// --- Exercise 1: Function forms ---
function greet(name) {
    return `Hello, ${name}!`;
}

const add = function (a, b) {
    return a + b;
};

const multiply = (a, b) => a * b;

const divide = (a, b) => {
    if (b === 0) {
        return "Cannot divide by zero";
    }
    return a / b;
};

console.log(greet("Ada"));
console.log(add(2, 3));
console.log(multiply(4, 5));
console.log(divide(10, 2));
console.log(divide(10, 0));

// --- Exercise 2: Build these functions ---

// 1. calculateArea(width, height)
function calculateArea(width, height) {
    return width * height;
}

// 2. celsiusToFahrenheit(celsius)
function celsiusToFahrenheit(celsius) {
    return (celsius * 9) / 5 + 32;
}

// 3. isEven(number)
function isEven(number) {
    return number % 2 === 0;
}

// 4. getInitials(fullName)
function getInitials(fullName) {
    return fullName
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase())
        .join("");
}

// 5. reverseString(str)
function reverseString(str) {
    return str.split("").reverse().join("");
}

console.log("calculateArea(4, 5):", calculateArea(4, 5));           // 20
console.log("celsiusToFahrenheit(100):", celsiusToFahrenheit(100)); // 212
console.log("isEven(7):", isEven(7));                               // false
console.log("isEven(8):", isEven(8));                               // true
console.log("getInitials('John Doe'):", getInitials("John Doe"));   // JD
console.log("reverseString('hello'):", reverseString("hello"));     // olleh

// --- Exercise 3: Default Parameters ---
function greetDefault(name = "Guest", greeting = "Hello") {
    return `${greeting}, ${name}!`;
}

console.log(greetDefault());              // Hello, Guest!
console.log(greetDefault("Alice"));       // Hello, Alice!
console.log(greetDefault("Bob", "Hi"));   // Hi, Bob!

// --- Build: calculateTip ---
function calculateTip(bill, tipPercent = 15) {
    return (bill * tipPercent) / 100;
}

console.log("calculateTip(100):", calculateTip(100));       // 15
console.log("calculateTip(80, 20):", calculateTip(80, 20)); // 16
