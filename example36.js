// Array ke index aur value dono print karna

const colors = ["red", "green", "blue"];

for (let [index, color] of colors.entries()) {
  // Har iteration mein index aur value milti hai
  console.log(`Index ${index} has value ${color}`);
}

// Output:
// Index 0 has value red
// Index 1 has value green
// Index 2 has value blue
