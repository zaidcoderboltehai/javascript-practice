// Basic Set Operations

// 1. Naya Set banao
const mySet = new Set();

// 2. Values add kar rahe
mySet.add(1);
mySet.add(5);
mySet.add(1);        // duplicate add karne ki koshish

// 3. Set mein values kitni hain dekhte hain
console.log(mySet.size);   // Output: 2  (1 aur 5)

// 4. Kisi value ki presence check karo
console.log(mySet.has(5)); // Output: true
console.log(mySet.has(3)); // Output: false

// 5. Value delete karo
mySet.delete(1);
console.log(mySet.has(1)); // Output: false
