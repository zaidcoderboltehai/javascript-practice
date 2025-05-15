// Custom comparison function with EPSILON

function areAlmostEqual(x, y) {
  return Math.abs(x - y) < Number.EPSILON;
}

console.log(areAlmostEqual(0.1 + 0.2, 0.3));   // ✅ true
console.log(areAlmostEqual(0.2 + 0.2, 0.4));   // ✅ true
