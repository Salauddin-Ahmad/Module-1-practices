// 3-9 Abstraction in OOP
// 1. interface and abstract methods

interface Vehicle1 {
  startEngine(): void;
  stopEngine(): void;
  move(): void;
}

// real implementation
class Car implements Vehicle1 {
  startEngine(): void {
    console.log("I am starting the car engine");
  }
  stopEngine(): void {
    console.log("Car engine started");
  }
  move(): void {
    console.log(`I am moving the car`);
  }

  test() {
    console.log(` I am just testing`);
  }
}

const toyotaCar = new Car();
toyotaCar.startEngine();

// abstract class


// idea 
 abstract class Car2 {
    abstract startEngine(): void ;
    abstract stopEngine(): void ;
  abstract move(): void ;

  test() {
    console.log(` I am just testing`);
  }
}
 class ToyotaCar extends Car2 {
    startEngine(): void {
        console.log(`start engine`)
    }
    stopEngine(): void {
        console.log(`stop engine`)
    }
    move(): void {
        console.log('I am moving the  car')
    }
 }


// const hondaCar = new Car2();
// hondaCar.startEngine();
