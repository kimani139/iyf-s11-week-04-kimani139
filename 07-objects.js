console.log("\n=== Task 8.2: Objects ===");

// --- Exercise 1: Object Basics ---
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    isStudent: false,
    hobbies: ["reading", "coding", "gaming"],
    address: {
        city: "New York",
        country: "USA",
    },
};

console.log(person.firstName);        // Dot notation
console.log(person["lastName"]);      // Bracket notation
console.log(person.address.city);     // Nested

person.age = 31;
person.email = "john@example.com";
delete person.isStudent;
console.log("updated person:", person);

// --- Exercise 2: Object Methods ---
const calculator = {
    add: function (a, b) {
        return a + b;
    },
    subtract(a, b) {
        return a - b;
    },
    multiply: (a, b) => a * b,
};

console.log(calculator.add(5, 3));

// --- Exercise 3: Object Iteration ---
const scores = {
    math: 95,
    english: 88,
    science: 92,
};

console.log(Object.keys(scores));
console.log(Object.values(scores));
console.log(Object.entries(scores));

for (const [subject, score] of Object.entries(scores)) {
    console.log(`${subject}: ${score}`);
}
