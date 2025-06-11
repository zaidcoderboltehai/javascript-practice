// 6. Constructor Function
// Constructor function se hum ek blueprint banate hain object create karne ke liye

function Person(name) {             
  // 1. Jab new Person(...) chalega, yeh function (constructor) call hoga
  this.name = name;                 
  // 2. 'this' naya object ko refer karta hai, usme 'name' property set kar rahe
}                                    
// Constructor definition yahin khatam hoti hai

const p = new Person("Zaid");       
// 3. 'new' keyword se naya object banta hai, Person constructor run hota hai
//    aur us object me name = "Zaid" store ho jaata hai

console.log(p.name);                
// 4. Ab hum us object ki 'name' property console pe print kar rahe
//    Output: Zaid
