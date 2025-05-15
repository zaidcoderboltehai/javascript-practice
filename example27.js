// Sum of Any Number of Numbers

// 1. '...numbers' saare arguments ko ek array mein le leta hai
function sumAll(...numbers) {
  let total = 0;

  // 2. Array ke har element ko add karte hain
  for (let num of numbers) {
    total += num;
  }

  return total;
}

// 3. Alag-alag number of arguments pass kiye gaye hain
console.log(sumAll(1, 2, 3));           // Output: 6
console.log(sumAll(10, 20, 30, 40));    // Output: 100
console.log(sumAll());                 // Output: 0
