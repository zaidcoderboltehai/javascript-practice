// 1. Class – Object banane ka modern ES6 syntax
class Person {
  constructor(name, age) {
    this.name = name; // Object ke andar 'name' property
    this.age = age;   // Object ke andar 'age' property
  }

  greet() {
    console.log(`Hello, my name is ${this.name}`);
    // Prototype pe method hota hai, har object reuse karta hai
  }
}
const person1 = new Person("Zaid", 22);
person1.greet(); // Output: Hello, my name is Zaid

// 2. Module – File based code splitting using import/export
// File: greet.js
// export function sayHello(name) {
//   console.log(`Hello, ${name}`);
// }
// File: main.js
// import { sayHello } from './greet.js';
// sayHello("Zaid"); // Output: Hello, Zaid

// 3. Arrow Function – Shorter syntax aur 'this' inherit karta hai
const add = (a, b) => a + b;
console.log(add(5, 3)); // Output: 8

// No-argument Arrow Function  
const sayHello = () => console.log("Hello!");  
//Koi argument nahi hai, bas console pe Hello! print karega  
sayHello(); // Output: Hello!

// Single-argument Arrow Function  
const double = n => n * 2;  
//Ek argument 'n' ko automatically return karta hai multiplied by 2  
console.log(double(4)); // Output: 8

// Multiple-statements Arrow Function (block body)  
const subtract = (a, b) => {  
  console.log("Subtracting", a, "and", b); // Hinglish: pehle log karega  
  return a - b;                            // phir result return karega  
};  
console.log(subtract(10, 3)); // Output: Subtracting 10 and 3 \n 7

// Array map with Arrow Function
const nums = [1, 2, 3];  
const squares = nums.map(x => x * x);  
// Hinglish: each element 'x' ka square bana ke new array me daal raha hai  
console.log(squares); // Output: [1, 4, 9]

// 4. Default Parameter – Jab koi argument na mile toh default use karo
function greetUser(name = "Guest") {
  console.log(`Hello, ${name}`);
}
greetUser();        // Output: Hello, Guest
greetUser("Zaid");  // Output: Hello, Zaid

// Multiply with Default Factor
function multiply(x, factor = 2) {
  console.log(x * factor);        // factor na mile to 2 se multiply karega
}
multiply(5);        // Output: 10  (5*2)
multiply(5, 3);     // Output: 15  (5*3)

// Coordinates with Default Origin
// Agar origin na diya, to (0,0) assume karega
function createPoint(x = 0, y = 0) {
  console.log(`Point at (${x}, ${y})`);
}
createPoint();      // Output: Point at (0, 0)
createPoint(10);    // Output: Point at (10, 0)
createPoint(10, 20);// Output: Point at (10, 20)

// Detailed Example – Pagination Function
function fetchPage(page = 1, pageSize = 10) {
  // page number aur pageSize agar na mile, to default values use
  console.log(`Fetching page ${page} with ${pageSize} items`);
  // yahan real API call hota, yeh sirf simulation hai
}
fetchPage();             // Output: Fetching page 1 with 10 items
fetchPage(2);            // Output: Fetching page 2 with 10 items
fetchPage(3, 5);         // Output: Fetching page 3 with 5 items

// Detailed Example – User Profile Creation
function createUser(username = "Anonymous", active = true) {
  // username aur active status ko default values de rahe
  const user = { username, active };
  console.log("New user:", user);
}
createUser();                   // Output: New user: { username: 'Anonymous', active: true }
createUser("Amit", false);      // Output: New user: { username: 'Amit', active: false }

// 5. Template Literal – Backtick (`) se readable string bana sakte ho
const city = "Mumbai";
console.log(`I live in ${city}`); // Output: I live in Mumbai

// Expression interpolation
const a = 5, b = 7;
console.log(`Sum of ${a} + ${b} = ${a + b}`);  
// Output: Sum of 5 + 7 = 12

// Multi-line string
console.log(`
  Shopping List:
  - Apples
  - Bananas
  - Oranges
`);
// Output:
//   Shopping List:
//   - Apples
//   - Bananas
//   - Oranges

// Tagged template (simple tag)
function tag(strings, value) {
  // strings array aur interpolation values alag milte hain
  console.log(strings[0], value.toUpperCase());
}
tag`Hello, ${"zaid"}`; 
// Output: Hello, ZAID

// 6. Destructuring Assignment – Object/Array se direct value nikalo
const user = { name: "Zaid", age: 22 };
const { name, age } = user;
console.log(name, age); // Output: Zaid 22

// 7. Spread Operator – Arrays ya Objects ko expand karne ke liye
const arr1 = [1, 2];
const arr2 = [3, 4];
const combined = [...arr1, ...arr2];
console.log(combined); // Output: [1, 2, 3, 4]

// 8. Object Property Shorthand – Key:value same ho toh short likho
const personName = "Amit", personAge = 25;
const newUser = { personName, personAge };
console.log(newUser); // Output: { personName: "Amit", personAge: 25 }

// 9. Array.includes() – Value array me exist karti hai ya nahi?
const fruits = ["apple", "banana"];
console.log(fruits.includes("banana")); // Output: true

// 10. Exponentiation Operator – Power calculate karne ke liye
console.log(2 ** 3); // Output: 8 (2 raised to the power 3)

// 11. async/await – Asynchronous code ko synchronous jaise likhna
async function fetchData() {
  return "Data fetched";
}
async function displayData() {
  const result = await fetchData();
  console.log(result); // Output: Data fetched
}
displayData();

// 12. Object.values() – Object ki sari values ko array me convert karta hai
const student = { name: "Zaid", age: 22 };
console.log(Object.values(student)); // Output: ["Zaid", 22]

// 13. Object.entries() – Key-value pairs ko array of arrays me convert karta hai
console.log(Object.entries(student)); // Output: [["name", "Zaid"], ["age", 22]]

// 14. await in loop – Async task ko sequence me run karne ke liye
async function processArray(arr) {
  for (const item of arr) {
    await new Promise(res => setTimeout(res, 500)); // 500ms delay
    console.log(item); // Output with delay: a, b, c
  }
}
processArray(["a", "b", "c"]);

// 15. promise.finally() – Promise complete hone ke baad cleanup ke liye
Promise.resolve("Done")
  .then(res => console.log(res))        // Output: Done
  .catch(err => console.log(err))       // Agar error ho toh
  .finally(() => console.log("Cleanup")); // Output: Cleanup (hamesha chalega)

// 16. Rest Parameter – Multiple arguments ko ek array me collect karo
function showNames(...names) {
  console.log(names);
}
showNames("Zaid", "Amit", "Pallavi"); // Output: ["Zaid", "Amit", "Pallavi"]

// 17. RegExp Groups – String se specific parts extract karna
const text = "My name is Zaid and age is 22";
const reg = /My name is (\w+) and age is (\d+)/;
const m = text.match(reg);
console.log(m[1], m[2]); // Output: Zaid 22

// 18. Negative Lookahead – Agar aage specific pattern nahi hona chahiye
console.log(/foo(?!bar)/.test("foobar")); // Output: false (kyunki "bar" aaraha hai)

// 19. dotAll Flag (/s) – Dot ko newline bhi match karne do
const str = "line1\nline2";
console.log(/line1.line2/.test(str));    // Output: false (.\n ko match nahi karta)
console.log(/line1.line2/s.test(str));  // Output: true (dotAll flag use hua)

// 20. String.matchAll() – Sabhi matches with details return karta hai
const msg = "ID1: 101, ID2: 202";
const idReg = /ID(\d+): (\d+)/g;
for (const x of msg.matchAll(idReg)) {
  console.log(`ID: ${x[1]}, Value: ${x[2]}`);
  // Output: ID: 1, Value: 101  &  ID: 2, Value: 202
}
