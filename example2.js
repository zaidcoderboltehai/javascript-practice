// Loop Scope Demo (let keyword )


// 1. for loop start kar rahe hain: i ko 1 se initialize karo
//    let keyword se block-scoped variable banta hai
for (let i = 1; i <= 3; i++) {
  // 2. Har iteration mein ek naya 'i' create hota hai (block scope ki wajah se)
  
  // 3. setTimeout function use karke ek callback schedule kar rahe hain
  //    Callback ke andar hum console.log se print karenge
  //    Delay = i * 500 milliseconds (0.5s, 1s, 1.5s)
  setTimeout(() => {
    // 4. Template literal me current iteration number print hoga
    console.log(`Iteration ${i}`);
  }, i * 500);
} // for loop yahin end

// Expected console output:
// 0.5s ke baad → Iteration 1
// 1.0s ke baad → Iteration 2
// 1.5s ke baad → Iteration 3
