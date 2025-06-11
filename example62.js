// Function ke andar integer check karna

function checkInteger(value) {
  if (Number.isInteger(value)) {
    console.log(`${value} is an integer.`);
  } else {
    console.log(`${value} is NOT an integer.`);
  }
}

checkInteger(25);      // 25 is an integer.
checkInteger(3.14);    // 3.14 is NOT an integer.
checkInteger("50");    // 50 is NOT an integer.
