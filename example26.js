// Add Numbers Function with Default Values

// 1. Do parameters hain jinke default values 1 aur 2 hain
function add(a = 1, b = 2) {
  return a + b;
}

// 2. Dono arguments diye gaye
console.log(add(5, 10));      
// Output: 15

// 3. Sirf ek argument diya gaya
console.log(add(7));          
// Output: 9  → 7 + default 2

// 4. Koi argument nahi diya gaya
console.log(add());           
// Output: 3  → default 1 + default 2
