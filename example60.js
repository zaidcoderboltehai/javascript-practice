// Safe integer check karna with MAX_SAFE_INTEGER

function isSafeInteger(num) {
  return num >= Number.MIN_SAFE_INTEGER && num <= Number.MAX_SAFE_INTEGER;
}

console.log(isSafeInteger(9007199254740991));  // ✅ true (safe hai)
console.log(isSafeInteger(9007199254740992));  // ❌ false (unsafe hai)
