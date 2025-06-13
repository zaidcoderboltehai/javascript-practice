// 1. Hoisting with var
console.log(a);               // undefined – var a upar hoist hua, par value abhi assign nahi hui
var a = 5;                    

// 2. TDZ with let/const
try {
  console.log(b);             // ReferenceError – let b TDZ mein hai, abhi use nahi kar sakte
} catch (err) {
  console.log("b is in TDZ");
}
let b = 10;                    

// 3. Function hoisting
sayHello();                    // Hello! – function declaration poori tarah upar hoist hoti hai
function sayHello() {
  console.log("Hello!");
}

// 4. Call Stack example (synchronous)
function first() {
  console.log("first");        // first
  second();                    // first ke baad second call
}
function second() {
  console.log("second");       // second
}
first();                       // Stack pe first → second → pop back to global

// 5. Asynchronous with Web API + Event Loop
console.log("Start");          // Start – sync log
setTimeout(() => {
  console.log("Timeout finished"); 
  // 1s baad Web API ne callback queue mein daala, event loop ne stack khaali hote hi run kiya
}, 1000);
console.log("End");            // End – sync log, setTimeout ke chalte rukega nahi

// Output order:
// undefined
// b is in TDZ
// Hello!
// first
// second
// Start
// End
// (1 second baad) Timeout finished
