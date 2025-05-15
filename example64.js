// Function mein safe integer check karna

function checkSafeInteger(value) {
  if (Number.isSafeInteger(value)) {
    console.log(`${value} is a safe integer.`);
  } else {
    console.log(`${value} is NOT a safe integer.`);
  }
}

checkSafeInteger(500);                     // 500 is a safe integer.
checkSafeInteger(9007199254740993);       // 9007199254740993 is NOT a safe integer.
checkSafeInteger("1000");                  // 1000 is NOT a safe integer (string hai)
checkSafeInteger(10.99);                   // 10.99 is NOT a safe integer (decimal)
