// Display User Details with Rest Info

// 1. 'name' fix hai, aur '...details' mein baaki info jaayegi
function showUser(name, ...details) {
  console.log("Name:", name);
  console.log("Other Details:", details);
}

// 2. Name ke baad age aur city pass kiya
showUser("Zaid", 22, "Mumbra");

// 3. Name ke baad aur zyada details
showUser("Amit", 25, "Mumbai", "Developer", "Gamer");
