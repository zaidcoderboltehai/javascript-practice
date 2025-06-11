// 2. Function Expression  
// Function ko ek variable mein assign kar rahe hain

const greet = function(name) {    // ‘greet’ naam ka variable banaya aur usme anonymous function daala
  console.log("Hi, " + name);    // Jab function chalega, console pe “Hi, <name>” print karega
};                                 // Function expression yahin end hoti hai

greet("Zaid");                     // Function call kar rahe hain – console pe “Hi, Zaid” aayega
