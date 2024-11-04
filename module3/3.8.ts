// polymorphism

class Human {
    getSleep(){
        console.log(' I am sleeping for 8 hours per day')

    }
}

class Students extends Human {
    getSleep(){
        console.log('I am sleeping for 7 hours per day')
    }
}

class Developers extends Human {
    getSleep(){
        console.log(' I am sleeping for')
    }
}

const personn1 = new Human()
const person2 = new Students()
const person3 = new Developers()

const getSleepHours = (param : Human) => {
 param.getSleep()
}



getSleepHours(personn1)
getSleepHours(person2)
getSleepHours(person3)

class Shape { 
    getArea() : number{
        return 0;
    }
}

// pi * r*r
class Circle extends Shape {

    radius : number;
    constructor(radius : number){
        super();
        this.radius = radius;
    }

    getArea(): number {
        return Math.PI * this.radius * this.radius;
    }

}

// class 
class Rectangle extends Shape {
    height: number;
    width: number;
    constructor(height : number, width : number, ){
        super();
        this.height = height;
        this.width = width;
    }

    getArea(): number {
        return  this.width * this.height;
    }

}

const getShapeArea = (param: Shape) => {
    console.log(param.getArea())
}

const shape1 = new Shape()
const shape2 = new Circle(10)
const shape3 = new Rectangle(10,20)

getShapeArea(shape2)
