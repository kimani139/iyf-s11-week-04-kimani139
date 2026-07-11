console.log("\n=== Task 8.3: Array of Objects ===");

const students = [
    { name: "Alice", age: 22, grade: 85, major: "CS" },
    { name: "Bob", age: 20, grade: 72, major: "Math" },
    { name: "Charlie", age: 23, grade: 90, major: "CS" },
    { name: "Diana", age: 21, grade: 88, major: "Physics" },
    { name: "Eve", age: 22, grade: 95, major: "CS" },
];

// 1. Get all student names
const names = students.map((s) => s.name);
console.log("1. names:", names);

// 2. Get students with grade > 80
const highAchievers = students.filter((s) => s.grade > 80);
console.log("2. highAchievers:", highAchievers);

// 3. Find the student named "Charlie"
const charlie = students.find((s) => s.name === "Charlie");
console.log("3. charlie:", charlie);

// 4. Calculate average grade
const avgGrade =
    students.reduce((total, s) => total + s.grade, 0) / students.length;
console.log("4. avgGrade:", avgGrade);

// 5. Get CS majors only
const csMajors = students.filter((s) => s.major === "CS");
console.log("5. csMajors:", csMajors);

// 6. Sort by grade (highest first)
const sortedByGrade = [...students].sort((a, b) => b.grade - a.grade);
console.log("6. sortedByGrade:", sortedByGrade);

// 7. Check if any student has grade > 90
const hasTopStudent = students.some((s) => s.grade > 90);
console.log("7. hasTopStudent:", hasTopStudent);

// 8. Check if all students are passing (grade >= 60)
const allPassing = students.every((s) => s.grade >= 60);
console.log("8. allPassing:", allPassing);
