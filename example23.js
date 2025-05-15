// Basic Symbol Creation

// 1. Ek unique Symbol create kar rahe hain, description sirf debugging ke liye
const sym1 = Symbol('mySymbol');

// 2. Symbol ka description console pe dekhte hain
console.log(sym1.description);  
// Output: mySymbol

// 3. Do baar same description se symbol banane par bhi unique honge
const sym2 = Symbol('mySymbol');
console.log(sym1 === sym2);     
// Output: false
