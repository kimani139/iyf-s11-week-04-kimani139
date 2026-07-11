console.log("\n=== Daily Challenges ===");

// --- Day 1: FizzBuzz ---
console.log("\n-- Day 1: FizzBuzz --");
function fizzBuzz() {
    for (let i = 1; i <= 100; i++) {
        if (i % 15 === 0) console.log("FizzBuzz");
        else if (i % 3 === 0) console.log("Fizz");
        else if (i % 5 === 0) console.log("Buzz");
        else console.log(i);
    }
}
fizzBuzz();

// --- Day 2: Reverse a String ---
console.log("\n-- Day 2: Reverse a String --");

// Approach 1: built-in methods
function reverseStringBuiltIn(str) {
    return str.split("").reverse().join("");
}

// Approach 2: loop
function reverseStringLoop(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

console.log(reverseStringBuiltIn("hello")); // olleh
console.log(reverseStringLoop("hello"));    // olleh

// --- Day 3: Find Largest Number ---
console.log("\n-- Day 3: Find Largest Number --");

// Approach 1: loop (no Math.max)
function findLargestLoop(arr) {
    let largest = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }
    return largest;
}

// Approach 2: reduce
function findLargestReduce(arr) {
    return arr.reduce((max, current) => (current > max ? current : max));
}

const testNumbers = [3, 17, 9, 42, 8, 21];
console.log(findLargestLoop(testNumbers));   // 42
console.log(findLargestReduce(testNumbers)); // 42

// --- Day 4: Remove Duplicates ---
console.log("\n-- Day 4: Remove Duplicates --");

// Approach 1: Set
function removeDuplicatesSet(arr) {
    return [...new Set(arr)];
}

// Approach 2: filter
function removeDuplicatesFilter(arr) {
    return arr.filter((value, index) => arr.indexOf(value) === index);
}

const withDuplicates = [1, 2, 2, 3, 4, 4, 5];
console.log(removeDuplicatesSet(withDuplicates));    // [1,2,3,4,5]
console.log(removeDuplicatesFilter(withDuplicates));  // [1,2,3,4,5]

// --- Day 5: Palindrome Checker ---
console.log("\n-- Day 5: Palindrome Checker --");

function isPalindrome(str) {
    const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, "");
    const reversed = cleaned.split("").reverse().join("");
    return cleaned === reversed;
}

console.log(isPalindrome("racecar"));                       // true
console.log(isPalindrome("hello"));                          // false
console.log(isPalindrome("A man a plan a canal Panama"));    // true
