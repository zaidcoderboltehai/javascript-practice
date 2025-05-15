// Map Iteration

const userRoles = new Map([
  ["Alice", "Admin"],
  ["Bob",   "User"]
]);

// 1. Map ke [key, value] pairs pe loop chalega
for (const [name, role] of userRoles) {
  console.log(`${name}: ${role}`);
}
// Output:
// Alice: Admin
// Bob: User
