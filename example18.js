// Iterating and Converting

// 1. Initial values ke saath Set banao
const colors = new Set(["red", "green", "blue", "green"]);

// 2. for…of se iterate karke print karo
for (const color of colors) {
  console.log(color);
}
// Output:
// red
// green
// blue

// 3. Set ko array mein convert karna
const colorArray = [...colors];
console.log(colorArray);
// Output: ["red", "green", "blue"]
