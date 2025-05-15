// Number.isFinite()

console.log(Number.isFinite(123));          // true, finite number hai
console.log(Number.isFinite(Infinity));     // false, infinite hai
console.log(Number.isFinite("123"));        // false, string hai number nahi
console.log(isFinite("123"));                // true, old isFinite converts string to number
console.log(Number.isFinite(NaN));           // false, NaN finite nahi hota
