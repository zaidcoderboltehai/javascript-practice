// Default Greeting Function

// 1. Function mein 'name' parameter hai jiska default value 'Guest' hai
function greet(name = "Guest") {
  console.log("Hello, " + name + "!");
}

// 2. Yaha par argument diya gaya hai
greet("Zaid");       
// Output: Hello, Zaid!

// 3. Yaha par koi argument nahi diya gaya
greet();             
// Output: Hello, Guest!
