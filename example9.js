// Basic Array Destructuring

const numbers = [10, 20, 30, 40];

// 1. numbers array ke pehle do elements ko a aur b mein assign kar rahe
const [a, b] = numbers;

console.log(a); // Output: 10
console.log(b); // Output: 20

// 2. Agle elements ko skip karne ke liye comma use kar sakte ho
const [, , third] = numbers;
console.log(third); // Output: 30
