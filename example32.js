// Using position argument

const dialog = "Brother's style is different";

// 1. Check kar rahe hain kya index 10 se 'style' start ho raha hai
console.log(dialog.startsWith("style", 10));  // ✅ Output: true

// 2. Check kar rahe hain kya index 0 se 'style' start ho raha hai
console.log(dialog.startsWith("style", 0));   // ❌ Output: false
