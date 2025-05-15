// Rest in Function Parameters

// 1. yahan pe `...numbers` bacha hua arguments ko ek array mein collect karega
function sumAll(...numbers) {
  // 2. reduce se array ke saare values ka sum nikal rahe
  return numbers.reduce((total, num) => total + num, 0);
}

console.log( sumAll(1, 2, 3) );      // Output: 6
console.log( sumAll(5, 10, 15, 20) ); // Output: 50
