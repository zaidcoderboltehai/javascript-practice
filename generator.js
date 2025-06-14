// 7. Generator Function Example

// 1. function* ka matlab generator function define kar rahe hain
function* countUp() {
  // 2. yield 1 — yahan function pause ho jayega aur 1 return karega
  yield 1;

  // 3. next() dubara call par yeh line chalegi, 2 return karega
  yield 2;

  // 4. phir next() pe yeh execute hoga, 3 return karega
  yield 3;
}

// 5. countUp() ko call karte hi ek iterator object milta hai
const counter = countUp();

// 6. counter.next() se pehla yield hua value milta hai → 1
console.log(counter.next().value); // Output: 1

// 7. counter.next() se dusra yield hua value milta hai → 2
console.log(counter.next().value); // Output: 2

// 8. agar phir se next() call karoge, teeja yield value mil jayega → 3
console.log(counter.next().value); // Output: 3

// 9. aur agle next() pe done: true, value: undefined
console.log(counter.next());       // Output: { value: undefined, done: true }
