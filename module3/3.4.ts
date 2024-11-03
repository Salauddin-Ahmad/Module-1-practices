// Define a base class called Animalz, which represents any generic animal
class Animalz {
    name: string;     // The name of the animal (e.g., "dog vai" or "cat vai")
    species: string;  // The species of the animal (e.g., "dog" or "cat")
  
    // Constructor to initialize name and species properties when creating a new Animalz object
    constructor(name: string, species: string) {
      this.name = name;
      this.species = species;
    }
  
    // Method to produce a generic sound; can be overridden by subclasses
    makeSound() {
      console.log("I am making sound"); // Default sound for any generic Animalz
    }
  }
  
  // Define a Dog class that extends Animalz, representing dogs specifically
  class Dog extends Animalz {
    // Dog class constructor, which uses Animalz's constructor to set name and species
    constructor(name: string, species: string) {
      super(name, species); // Calls the parent class's (Animalz) constructor
    }
  
    // Dog-specific method to simulate barking
    makBark() {
      console.log("I am barking"); // Unique sound for dogs
    }
  }
  
  // Define a Cat class that also extends Animalz, representing cats specifically
  class Cat extends Animalz {
    // Cat class constructor, also using Animalz's constructor
    constructor(name: string, species: string) {
      super(name, species); // Calls the parent class's (Animalz) constructor
    }
  
    // Cat-specific method to simulate meowing
    makMeaw() {
      console.log("I am meawing"); // Unique sound for cats
    }
  }
  
  // Type guard function to check if an Animalz object is a Dog
  const isDog = (animal: Animalz): animal is Dog => {
    return animal instanceof Dog; // Returns true if 'animal' is an instance of Dog
  };
  
  // Type guard function to check if an Animalz object is a Cat
  const isCat = (animal: Animalz): animal is Cat => {
    return animal instanceof Cat; // Returns true if 'animal' is an instance of Cat
  };
  
  // Function to determine the type of Animalz and call appropriate methods
  const getAnimal = (animal: Animalz) => {
    if (isDog(animal)) {
      // If the animal is a Dog, call makBark() method
      animal.makBark();
    } else if (isCat(animal)) {
      // If the animal is a Cat, call makMeaw() method
      animal.makMeaw();
    } else {
      // For any other type of Animalz, call the default makeSound() method
      animal.makeSound();
    }
  };
  
  // Create instances of Dog and Cat with specific names and species
  const doO = new Dog("dog vai", "dog"); // Create a Dog instance
  const catT = new Cat("cat vai", "cat"); // Create a Cat instance
  
  // Call getAnimal function for each instance to see the appropriate behavior
  getAnimal(doO); // Output: "I am barking" - as doO is an instance of Dog
  getAnimal(catT); // Output: "I am meawing" - as catT is an instance of Cat
  