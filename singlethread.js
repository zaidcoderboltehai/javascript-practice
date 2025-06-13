console.log("Step 1: Start Cooking"); // Ye sync code hai → turant run hoga

setTimeout(() => {
  console.log("Step 2: Timer Done (after 2 sec)"); // Web API handle karega
}, 2000); // setTimeout browser ko de diya, JS wait nahi karega

fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then(response => response.json())
  .then(data => {
    console.log("Step 3: Data fetched:", data); // Web API ne background mein kiya
  });

console.log("Step 4: Cooking Continues"); // Sync code → turant run hoga
