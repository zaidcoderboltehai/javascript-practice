// Number.isNaN()

console.log(Number.isNaN(NaN));            // true, because it's really NaN
console.log(Number.isNaN("NaN"));          // false, string "NaN" hai, NaN nahi
console.log(Number.isNaN(undefined));      // false
console.log(isNaN("hello"));                // true, old isNaN function ka behaviour
console.log(Number.isNaN("hello"));        // false, new function correctly detects NaN
