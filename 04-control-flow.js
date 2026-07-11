console.log("\n=== Task 7.4: Control Flow ===");

// --- Exercise 1: If/Else ---
function getGrade(score) {
    if (score >= 90) {
        return "A";
    } else if (score >= 80) {
        return "B";
    } else if (score >= 70) {
        return "C";
    } else if (score >= 60) {
        return "D";
    } else {
        return "F";
    }
}

console.log("getGrade(95):", getGrade(95));
console.log("getGrade(55):", getGrade(55));

// --- Exercise 2: Switch Statement ---
function getDayName(dayNumber) {
    switch (dayNumber) {
        case 0:
            return "Sunday";
        case 1:
            return "Monday";
        case 2:
            return "Tuesday";
        case 3:
            return "Wednesday";
        case 4:
            return "Thursday";
        case 5:
            return "Friday";
        case 6:
            return "Saturday";
        default:
            return "Invalid day";
    }
}

console.log("getDayName(3):", getDayName(3));
console.log("getDayName(9):", getDayName(9));

// --- Exercise 3: Loops ---
for (let i = 0; i < 5; i++) {
    console.log("for loop:", i);
}

let loopCount = 0;
while (loopCount < 5) {
    console.log("while loop:", loopCount);
    loopCount++;
}

const colors = ["red", "green", "blue"];
for (const color of colors) {
    console.log("for...of:", color);
}

// --- Build these programs ---

// 1. Print numbers 1-100
console.log("\n-- Numbers 1-100 --");
for (let i = 1; i <= 100; i++) {
    console.log(i);
}

// 2. Print only even numbers 1-50
console.log("\n-- Even numbers 1-50 --");
for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

// 3. FizzBuzz
console.log("\n-- FizzBuzz (1-100) --");
for (let i = 1; i <= 100; i++) {
    if (i % 15 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}

// 4. Triangle of stars
console.log("\n-- Triangle of stars --");
const rows = 5;
for (let i = 1; i <= rows; i++) {
    console.log("*".repeat(i));
}
