// Basic Class Declaration

// 1. Person naam ki class bana rahe hain
class Person {
  // 2. constructor se initial properties set hoti hain
  constructor(name, age) {
    this.name = name;   // name property assign kari
    this.age = age;     // age property assign kari
  }

  // 3. greet method define kiya
  greet() {
    console.log(`Hello, I am ${this.name}, and I am ${this.age} years old.`);
  }
}

// 4. Person ka ek naya instance (object) banaya
const p = new Person("Zaid", 22);

// 5. greet method call karke message print kiya
p.greet();  
// Output: Hello, I am Zaid, and I am 22 years old.
