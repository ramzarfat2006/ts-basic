"use strict";
class Vehicle {
    start() {
        console.log("Vroommm");
    }
}
class Car extends Vehicle {
    constructor() {
        super(...arguments);
        this.wheels = 4;
    }
}
class Motorcycle extends Vehicle {
    constructor() {
        super(...arguments);
        this.wheels = 2;
    }
}
let car = new Car();
console.log(car.wheels);
car.start();
let motor = new Motorcycle();
console.log(motor.wheels);
motor.start();
