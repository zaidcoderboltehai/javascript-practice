// Safe integer check karna

console.log(Number.isSafeInteger(9007199254740991));   // true, ye max safe integer hai
console.log(Number.isSafeInteger(9007199254740992));   // false, ye safe integer nahi hai (overflow)
console.log(Number.isSafeInteger(123));                // true, chhota integer safe hota hai
console.log(Number.isSafeInteger(12.5));               // false, decimal number hai
