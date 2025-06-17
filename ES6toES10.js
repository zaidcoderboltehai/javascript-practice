// ✅ 1. Class – Object banane ka modern ES6 syntax
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

// ✅ 2. Module – File based code splitting using import/export
// File: greet.js
// export function sayHello(name) {
//   console.log(`Hello, ${name}`);
// }
// File: main.js
// import { sayHello } from './greet.js';
// sayHello("Zaid"); // Output: Hello, Zaid

// ✅ 3. Arrow Function – Shorter syntax aur 'this' inherit karta hai
const add = (a, b) => a + b;
console.log(add(5, 3)); // Output: 8

// ✅ 4. Default Parameter – Jab koi argument na mile toh default use karo
function greetUser(name = "Guest") {
  console.log(`Hello, ${name}`);
}
greetUser();        // Output: Hello, Guest
greetUser("Zaid");  // Output: Hello, Zaid

// ✅ 5. Template Literal – Backtick (`) se readable string bana sakte ho
const city = "Mumbai";
console.log(`I live in ${city}`); // Output: I live in Mumbai

// ✅ 6. Destructuring Assignment – Object/Array se direct value nikalo
const user = { name: "Zaid", age: 22 };
const { name, age } = user;
console.log(name, age); // Output: Zaid 22

// ✅ 7. Spread Operator – Arrays ya Objects ko expand karne ke liye
const arr1 = [1, 2];
const arr2 = [3, 4];
const combined = [...arr1, ...arr2];
console.log(combined); // Output: [1, 2, 3, 4]

// ✅ 8. Object Property Shorthand – Key:value same ho toh short likho
const personName = "Amit", personAge = 25;
const newUser = { personName, personAge };
console.log(newUser); // Output: { personName: "Amit", personAge: 25 }

// ✅ 9. Array.includes() – Value array me exist karti hai ya nahi?
const fruits = ["apple", "banana"];
console.log(fruits.includes("banana")); // Output: true

// ✅ 10. Exponentiation Operator – Power calculate karne ke liye
console.log(2 ** 3); // Output: 8 (2 raised to the power 3)

// ✅ 11. async/await – Asynchronous code ko synchronous jaise likhna
async function fetchData() {
  return "Data fetched";
}
async function displayData() {
  const result = await fetchData();
  console.log(result); // Output: Data fetched
}
displayData();

// ✅ 12. Object.values() – Object ki sari values ko array me convert karta hai
const student = { name: "Zaid", age: 22 };
console.log(Object.values(student)); // Output: ["Zaid", 22]

// ✅ 13. Object.entries() – Key-value pairs ko array of arrays me convert karta hai
console.log(Object.entries(student)); // Output: [["name", "Zaid"], ["age", 22]]

// ✅ 14. await in loop – Async task ko sequence me run karne ke liye
async function processArray(arr) {
  for (const item of arr) {
    await new Promise(res => setTimeout(res, 500)); // 500ms delay
    console.log(item); // Output with delay: a, b, c
  }
}
processArray(["a", "b", "c"]);

// ✅ 15. promise.finally() – Promise complete hone ke baad cleanup ke liye
Promise.resolve("Done")
  .then(res => console.log(res))        // Output: Done
  .catch(err => console.log(err))       // Agar error ho toh
  .finally(() => console.log("Cleanup")); // Output: Cleanup (hamesha chalega)

// ✅ 16. Rest Parameter – Multiple arguments ko ek array me collect karo
function showNames(...names) {
  console.log(names);
}
showNames("Zaid", "Amit", "Pallavi"); // Output: ["Zaid", "Amit", "Pallavi"]

// ✅ 17. RegExp Groups – String se specific parts extract karna
const text = "My name is Zaid and age is 22";
const reg = /My name is (\w+) and age is (\d+)/;
const m = text.match(reg);
console.log(m[1], m[2]); // Output: Zaid 22

// ✅ 18. Negative Lookahead – Agar aage specific pattern nahi hona chahiye
console.log(/foo(?!bar)/.test("foobar")); // Output: false (kyunki "bar" aaraha hai)

// ✅ 19. dotAll Flag (/s) – Dot ko newline bhi match karne do
const str = "line1\nline2";
console.log(/line1.line2/.test(str));    // Output: false (.\n ko match nahi karta)
console.log(/line1.line2/s.test(str));  // Output: true (dotAll flag use hua)

// ✅ 20. String.matchAll() – Sabhi matches with details return karta hai
const msg = "ID1: 101, ID2: 202";
const idReg = /ID(\d+): (\d+)/g;
for (const x of msg.matchAll(idReg)) {
  console.log(`ID: ${x[1]}, Value: ${x[2]}`);
  // Output: ID: 1, Value: 101  &  ID: 2, Value: 202
}
