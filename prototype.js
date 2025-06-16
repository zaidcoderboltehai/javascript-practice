// Step 1: Ek constructor function banate hain jisse hum naya object bana sakein
function Person(name) {
  // is function ke andar 'this.name' ek property ban rahi hai
  this.name = name;
}

// Step 2: Person ke prototype me ek function (method) add karte hain
// Ye method sabhi Person objects ke liye available hoga
Person.prototype.sayHello = function() {
  console.log("Hello, my name is " + this.name);
};

// Step 3: Ab ek naya object banate hain using 'new' keyword
let person1 = new Person("Zaid");

// Step 4: Ab hum 'sayHello' method call kar rahe hain
// JavaScript pehle check karega ki kya ye method person1 ke andar hai
// Agar nahi mila to wo uske prototype me check karega
person1.sayHello(); // Output: Hello, my name is Zaid

//Check karte hain prototype chain kaise kaam kar rahi hai
console.log(person1.__proto__ === Person.prototype); // true
console.log(Person.prototype.__proto__ === Object.prototype); // true

// Ye dikhata hai ki person1 ka prototype hai Person.prototype
// Aur uska prototype hai Object.prototype (ye JavaScript me sabse upar hota hai)
