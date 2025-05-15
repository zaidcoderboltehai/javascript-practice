// Default Values & Renaming

const settings = { theme: "dark" };

// 1. theme ko extract kar rahe aur fontSize ko default 14 set kar rahe
const { theme, fontSize = 14 } = settings;

// 2. apiEndpoint ko rename karke `url` variable bana rahe, default value bhi de rahe
const { apiEndpoint: url = "https://api.example.com" } = settings;

console.log(theme);    // Output: dark
console.log(fontSize); // Output: 14
console.log(url);      // Output: https://api.example.com
