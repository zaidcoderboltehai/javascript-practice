// Symbols as Object Property Keys

// 1. Object ke liye ek collision-free key banate hain
const SECRET = Symbol('secret');

// 2. Ek normal object banaya
const user = {
  name: 'Zaid'
};

// 3. Symbol key use karke nayi property add ki
user[SECRET] = 'superSecretValue';

// 4. Console pe normal properties dikhengi
console.log(Object.keys(user));      
// Output: [ 'name' ]

// 5. Direct symbol-keyed value access kar sakte ho
console.log(user[SECRET]);           
// Output: superSecretValue

// 6. Symbol properties iteration se skip hoti hain
for (const key in user) {
  console.log(key);                 
}
// Output:
// name
