// Step 1: Original object banate hain
let original = {
  name: "Zaid",             // primitive value stack mein store
  address: {                // nested object heap mein store
    city: "Mumbai"          // nested property
  }
};

// Step 2: Shallow copy banana using Object.assign()
// Object.assign({}, original) ek naya object banaata hai
// par nested objects ka **reference** hi copy karta hai
let shallowCopy = Object.assign({}, original);

// Step 3: Shallow copy ke nested object ko modify karna
shallowCopy.address.city = "Delhi";
// Kyunki address reference same hai,
// original.address.city bhi change ho jaayega

// Step 4: Result check karna
console.log("Original:", original.address.city);      // Output: Original: Delhi
console.log("Shallow Copy:", shallowCopy.address.city); // Output: Shallow Copy: Delhi
