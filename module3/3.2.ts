// oop - inheritance

class Parent {
  name: string;
  age: number;
  address: string;

  constructor(name: string, age: number, address: string) {
    this.name = name;
    this.age = age;
    this.address = address;
  }
  getSleep(numOfHours: number) {
    console.log(`${this.name} will sleep for ${numOfHours}`);
  }
}

class Student extends Parent {
  // name: string;
  // age: number;
  // address: string;

  constructor(name: string, age: number, address: string) {
    super(name, age, address);
  }
  getSleep(numOfHours: number) {
    console.log(`${this.name} will sleep for ${numOfHours}`);
  }
}

const studentt = new Student("Mr. stundent", 20, "uganda");

class Teacher extends Parent {
  designation: string;

  constructor(name: string, age: number, address: string, designation: string) {
    super(name, age, address);
    this.designation = designation;
  }
  getSleep(numOfHours: number) {
    console.log(`${this.name} will sleep for ${numOfHours}`);
  }

  takeClass(numOfClass: number) {
    console.log(`${this.name} will take class for ${numOfClass}`);
  }
}

const teacher = new Teacher("Mr. Teacher", 40, "uganda", "proffessor");
