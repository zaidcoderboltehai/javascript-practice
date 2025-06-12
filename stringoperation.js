// string-operations

const msg = "  Hello Zaid!  ";

// 1. length → Kitne characters hain
console.log(msg.length);             
// Output: 15  (spaces count hote hain)

// 2. toUpperCase() → Sabko capital mein karo
console.log(msg.toUpperCase());      
// Output: "  HELLO ZAID!  "

// 3. toLowerCase() → Sabko small mein karo
console.log(msg.toLowerCase());      
// Output: "  hello zaid!  "

// 4. includes() → Kya word string mein hai?
console.log(msg.includes("Zaid"));   
// Output: true

// 5. indexOf() → Word ka index do
console.log(msg.indexOf("Zaid"));    
// Output: 8   (first character of "Zaid" ka index)

// 6. startsWith() → Kya string isse shuru hoti hai?
console.log(msg.trim().startsWith("Hello")); 
// Output: true  (trim() ke baad leading spaces hata diye)

// 7. endsWith() → Kya string isse end hoti hai?
console.log(msg.trim().endsWith("!"));       
// Output: true

// 8. slice() → Part of string nikalo
console.log(msg.slice(2, 7));        
// Output: "Hello"  (index 2 se 7-1 tak)

// 9. substring() → Same as slice, lekin negative index nahi leta
console.log(msg.substring(2, 7));    
// Output: "Hello"

// 10. replace() → Word ko replace karo
console.log(msg.replace("Zaid", "Bhai")); 
// Output: "  Hello Bhai!  "

// 11. trim() → Extra spaces hatao (start & end)
console.log(msg.trim());             
// Output: "Hello Zaid!"

// 12. split() → String ko array mein convert karo
console.log(msg.trim().split(" "));  
// Output: ["Hello", "Zaid!"]

// 13. repeat() → String ko baar baar repeat karo
console.log("Hi! ".repeat(3));       
// Output: "Hi! Hi! Hi! "

// 14. charAt() → Specific position ka character do
console.log(msg.charAt(3));          
// Output: "l" (index 3 pe character)
