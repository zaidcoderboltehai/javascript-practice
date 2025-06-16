// Example 1: Primitive type (number)
let a = 10;
let b = a; // yeh copy ho gaya (alag memory allocate hui)

b = 20; // ab b ko change kiya

console.log("a =", a); // 10 (original value safe hai)
console.log("b =", b); // 20

// Explanation:
// 'a' aur 'b' dono primitive hain, to memory me alag-alag jagah pe store hote hain.
// Jab 'b = a' likha, tab 'a' ki value copy hui, aur uski ek alag memory ban gayi.
// Isiliye jab 'b' ko change kiya, to 'a' pe koi effect nahi hua.


// Example 2: Reference type (object)
let person1 = { name: "Zaid" };
let person2 = person1; // yeh reference copy hua (same memory share kar rahe hain)

person2.name = "Amit"; // person2 me name change kiya

console.log("person1.name =", person1.name); // Amit
console.log("person2.name =", person2.name); // Amit

// Explanation:
// 'person1' aur 'person2' object hain, to memory me ek hi object ka reference share kar rahe hain.
// Jab 'person2' me name change kiya, wo 'person1' me bhi reflect hua kyunki dono same memory address ko point kar rahe hain.
