// Floating point precision issue solve karna

const a = 0.1 + 0.2;  // ➡️ 0.30000000000000004
const b = 0.3;

// Direct comparison galat hoga
console.log(a === b);  // ❌ false

// EPSILON ke saath comparison sahi hoga
console.log(Math.abs(a - b) < Number.EPSILON);  // ✅ true
