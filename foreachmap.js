// Step 1: Ek simple array banaya
let numbers = [1, 2, 3, 4, 5];

// forEach() Example
// forEach ka use hum tab karte hain jab hume sirf har element pe kuch operation karna ho
// forEach khud koi naya array return nahi karta
console.log("Using forEach:");

numbers.forEach(function(num) {
  let square = num * num; // har number ka square nikala
  console.log(square);    // sirf square print kar diya (naya array nahi bana)
});

// Important: forEach kuch bhi return nahi karta, sirf side-effect ke liye use hota hai (jaise print karna, update karna)

// map() Example
// map bhi har element pe kaam karta hai jaise forEach
// Lekin map ka main kaam hai: ek NAYA array return karna with modified values

let squares = numbers.map(function(num) {
  return num * num; // har number ka square return kiya
});

// Yahan map() har return value ko uthake ek naye array me daal deta hai
console.log("Using map:");
console.log(squares); // [1, 4, 9, 16, 25] — Ye naya array map ne banaya
