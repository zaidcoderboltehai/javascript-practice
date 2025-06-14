// Step 1: Ek outer function banate hain jiska naam hai createCounter
function createCounter() {
  // Step 2: Yeh variable outer function ke andar bana hai
  // Yeh sirf createCounter function ke andar hi access ho sakta hai
  let count = 0;

  // Step 3: createCounter ek function return kar raha hai
  // Jo ki andar bana hua hai (inner function)
  return function() {
    // Step 4: Jab yeh inner function chalega,
    // to count variable ki value 1 se badh jaayegi
    count++;

    // Step 5: Har baar count ki updated value print hogi
    console.log("Current count:", count);
  };
}

// Step 6: Ab hum createCounter function ko call karte hain
// Yeh ek naya counter bana ke deta hai, jisme count = 0 se start hota hai
const counter1 = createCounter();

// Step 7: Ab hum counter1 ko call karte hain
// Yeh inner function hai jo count++ karega
counter1(); // Output: Current count: 1
counter1(); // Output: Current count: 2
counter1(); // Output: Current count: 3
