// Block-Scope Demo(let keyword)


// 1. Global scope mein 'message' variable banaya aur value set ki
let message = "Outside block";    // Yeh pura file mein bahr bhi aur andar bhi chalega

if (true) {                       // Condition hamesha true hai, toh yeh block chalega
  // 2. Block ke andar ek naya 'message' variable banaya
  let message = "Inside block";  // Yeh sirf is block ke andar valid hai
  console.log(message);          // Block-scoped message print karega
  // Output: Inside block
}

console.log(message);            // Ab block ke bahar, global 'message' print hoga
// Output: Outside block
