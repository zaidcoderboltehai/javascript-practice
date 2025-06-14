// 5. IIFE (Immediately Invoked Function Expression)
// Yeh ek aisa function hai jise define karte hi turant execute kar diya jaata hai

(function() {                                
  // (1) Parentheses mein anonymous function define kiya
  //     Yeh function ka naam nahi hai, bas ek block of code hai.

  console.log("This is an IIFE, ran immediately");
  // (2) Function body: turant console pe yeh message print karega

})();                                        
// (3) Baahar wale (); se is anonymous function ko
//     define hote hi turant call (invoke) kiya gaya
