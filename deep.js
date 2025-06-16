// Step 1: Original object define karte hain
let original = {
  name: "Zaid",           // primitive value stack mein store
  address: {              // nested object heap mein store
    city: "Mumbai"        // nested property
  }
};

// Step 2: Deep copy banana using JSON methods
// JSON.stringify(original) → original object ko string mein convert karta hai
// JSON.parse(...)           → us string ko naya object bana ke wapas deta hai
let deepCopy = JSON.parse(JSON.stringify(original));

// Step 3: Deep copy ke nested object ko modify karte hain
deepCopy.address.city = "Delhi";
//  Kyunki deep copy ne nested object ko bhi naya banaya,
//  original.address.city par koi farq nahi padega

// Step 4: Dono objects ka result check karte hain
console.log("Original:", original.address.city);  // Output: Original: Mumbai
console.log("Deep Copy:", deepCopy.address.city); // Output: Deep Copy: Delhi
