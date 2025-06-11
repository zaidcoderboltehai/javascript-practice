// 7. Generator Function
function* countUp() {                 // 1. function* ka matlab generator function define kar rahe hain
  yield 1;                            // 2. yield 1 — function yahin pause ho jayega aur 1 return karega
  yield 2;                            // 3. next() dubara call par yeh line chalegi, 2 return karega
  yield 3;                            // 4. fir next() pe yeh execute hoga, 3 return karega
}
const counter = countUp();           // 5. countUp() ko call kiya, ek iterator object mila

console.log(counter.next().value);   // 6. next() se pehla yield hua value milta hai → 1
console.log(counter.next().value);   // 7. next() se dusra yield hua value milta hai → 2
