// Class Inheritance

// 1. Base class Animal banate hain
class Animal {
  constructor(species) {
    this.species = species;  // species property set hui
  }
  
  // 2. base class ka method
  makeSound() {
    console.log(`${this.species} makes a sound.`);
  }
}

// 3. Dog class Animal se inherit kar rahi hai
class Dog extends Animal {
  constructor(name) {
    super("Dog");           // super() se parent constructor call karo
    this.name = name;       // apni specific property set karo
  }

  // 4. Dog ki apni method
  bark() {
    console.log(`${this.name} says: Woof Woof!`);
  }
}

// 5. Dog ka instance banaya
const myDog = new Dog("Buddy");

// 6. Parent class ka method call karo
myDog.makeSound();  // Output: Dog makes a sound.

// 7. Child class ka method call karo
myDog.bark();       // Output: Buddy says: Woof Woof!
