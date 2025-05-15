// Constant Object and Array Usage

// 1. Ek constant object banaya
const userProfile = {
  name: "Alice",
  role: "Developer"
};

// 2. Object ke properties update kar sakte ho
userProfile.role = "Senior Developer";
console.log(userProfile); 
// Output: { name: 'Alice', role: 'Senior Developer' }

// 3. Pure object reference replace karna mana hai
// userProfile = { name: "Bob", role: "Designer" };
// ❌ TypeError: Assignment to constant variable.

// 4. Ek constant array banaya
const colorList = ["red", "green"];

// 5. Array mein naya element push kar sakte ho
colorList.push("blue");
console.log(colorList); 
// Output: [ 'red', 'green', 'blue' ]

// 6. Pura array replace karna allowed nahi
// colorList = ["yellow"];
// ❌ TypeError: Assignment to constant variable.
