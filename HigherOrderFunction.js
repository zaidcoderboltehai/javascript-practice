
//customGreet ek HOF hai – kyunki ye ek function ko argument mein leta hai
function customGreet(name, greetFunction) {
  // name: string (e.g. "Zaid")
  // greetFunction: ek function jo greeting decide karega
  console.log("Greeting start...");

  // yahan par greetFunction ko call kiya jaa raha hai
  greetFunction(name);

  console.log("Greeting end...");
}

//Ye ek normal function hai jo message print karta hai
function sayHello(name) {
  console.log("Hello, " + name + "!");
}

//Ye bhi ek function hai (different greeting style)
function sayGoodMorning(name) {
  console.log("Good Morning, " + name + "!");
}

//HOF ko call karte waqt, dusra function pass kar rahe hain as argument
customGreet("Zaid", sayHello);       
// Output:
// Greeting start...
// Hello, Zaid!
// Greeting end...

customGreet("Zaid", sayGoodMorning); 
// Output:
// Greeting start...
// Good Morning, Zaid!
// Greeting end...



// Function returning another function – also a HOF

function multiplier(factor) {
  // Ye function ek number return nahi karta
  // Ye ek function return karta hai!
  return function(num) {
    return num * factor;
  };
}

// yahan pe multiplier(2) ne ek function return kiya
const double = multiplier(2); 
console.log(double(5));  // Output: 10

const triple = multiplier(3);
console.log(triple(4));  // Output: 12
