// File: async-example.js

console.log("1. Start");          // Line 1

setTimeout(() => {                // Background mein chalu hota hai
  console.log("2. Task A done");  // After 1 second
}, 1000);

console.log("3. Doing task B");   // Line 3
// Possible Output:
// 1. Start
// 3. Doing task B
// (1 second baad) 2. Task A done
