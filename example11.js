// Spread with Arrays

const fruits = ["apple", "banana", "mango"];

// 1. fruits array ko spread karke ek naya array bana rahe
const moreFruits = ["orange", ...fruits, "pineapple"];
console.log(moreFruits);
// Output: ["orange", "apple", "banana", "mango", "pineapple"]

// 2. Array copy karne ke liye bhi spread use hota hai
const fruitsCopy = [...fruits];
console.log(fruitsCopy);
// Output: ["apple", "banana", "mango"]
