// Basic Map Usage

// 1. Naya Map banao
const userAges = new Map();

// 2. Map mein key–value pairs add kar rahe
userAges.set("Zaid", 22);
userAges.set("Ansari", 25);

// 3. Kisi key ki value get karte hain
console.log(userAges.get("Zaid"));    // Output: 22

// 4. Map ki size dekhte hain
console.log(userAges.size);           // Output: 2

// 5. Kisi key ki presence check kar sakte hain
console.log(userAges.has("Mohd"));    // Output: false

// 6. Kisi entry ko delete kar sakte ho
userAges.delete("Ansari");
console.log(userAges.size);           // Output: 1
