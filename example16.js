// Iterating a Map

const userScores = new Map([
  ["Alice", 85],
  ["Bob",   92],
  ["Charlie", 78]
]);

// 1. for…of se Map ke [key, value] pairs iterate kar sakte ho
for (const [name, score] of userScores) {
  console.log(`${name} scored ${score}`);
}

// 2. keys() aur values() methods bhi use kar sakte ho
for (const name of userScores.keys()) {
  console.log(`User: ${name}`);
}

for (const score of userScores.values()) {
  console.log(`Score: ${score}`);
}
