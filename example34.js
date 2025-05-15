// File: length parameter ke saath

const quote = "Success is the best revenge";

// Check kar rahe hain kya first 21 characters 'best' pe end hote hain
console.log(quote.endsWith("best", 21));  // ✅ Output: true

// Check kar rahe hain kya first 10 characters 'Success' pe end hote hain
console.log(quote.endsWith("Success", 10));  // ✅ Output: true
