// Step 1: Ek object banate hain
let person = {
  fullName: function(city, country) {
    console.log(this.firstName + " " + this.lastName + " from " + city + ", " + country);
  }
};

// Step 2: Ek alag object banate hain jiska data use karna hai
let person1 = {
  firstName: "Zaid",
  lastName: "Ansari"
};

// ------------------------
// CALL Example
// Syntax: function.call(thisArg, arg1, arg2)
person.fullName.call(person1, "Mumbai", "India");

// call() directly function ko call karta hai, aur arguments comma se pass karte hain
// Output: Zaid Ansari from Mumbai, India

// ------------------------
// APPLY Example
// Syntax: function.apply(thisArg, [arg1, arg2])
person.fullName.apply(person1, ["Delhi", "India"]);

// apply() bhi call() ki tarah hota hai, bas arguments array mein pass karte hain
// Output: Zaid Ansari from Delhi, India

// ------------------------
// BIND Example
// Syntax: function.bind(thisArg, arg1, arg2)
let boundFunction = person.fullName.bind(person1, "Pune", "India");

// bind() function ko call nahi karta, balki ek naya function return karta hai
boundFunction(); // Output: Zaid Ansari from Pune, India
