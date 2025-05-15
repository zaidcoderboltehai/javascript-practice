// Default Values & Swapping

// 1. Array mein sirf ek element hai
const coords = [5];

// 2. Destructuring ke saath default values set kar rahe
const [x = 0, y = 0] = coords;
console.log(x); // Output: 5
console.log(y); // Output: 0  (coords[1] missing, default used)

// 3. Variables swap karna bina temp variable ke
let p = 1, q = 2;
[p, q] = [q, p];
console.log(p, q); // Output: 2 1
