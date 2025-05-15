// Simple array ke saath

const fruits = ["apple", "banana", "cherry"];

// 'entries()' se ek iterator milega
const iterator = fruits.entries();

// Har value ko loop se print kar rahe hain
for (let entry of iterator) {
  console.log(entry);  
}

// Output:
// [0, 'apple']
// [1, 'banana']
// [2, 'cherry']
