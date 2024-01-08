abstract class Vehicle{
    abstract wheels:number
    start(): void{
        console.log("Vroommm")
    }
}
class Car extends Vehicle{
    wheels: number = 4
}
class Motorcycle extends Vehicle{
    wheels: number = 2
}
let car = new Car()
console.log(car.wheels)
car.start()

let motor = new Motorcycle()
console.log(motor.wheels)
motor.start()
