// Case sensitivity aur starting position ka use

const phrase = "JavaScript is Awesome";

// 1. Check kar rahe hain 'javascript' (lowercase) present hai ya nahi
console.log(phrase.includes("javascript"));  // ❌ Output: false (case sensitive)

// 2. Check kar rahe hain 'is' word index 0 se baad mein milta hai ya nahi
console.log(phrase.includes("is", 5));       // ✅ Output: true
