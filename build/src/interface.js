"use strict";
class Lenovo {
    constructor(name, isGaming) {
        this.name = name;
        this.isGaming = isGaming;
    }
    on() {
        console.log("nyala");
    }
    off() {
        console.log("mati");
    }
}
class Macbook {
    constructor(name, keyboardLight) {
        this.name = name;
        this.keyboardLight = keyboardLight;
    }
    on() {
        console.log("nyala");
    }
    off() {
        console.log("mati");
    }
}
let lenovo = new Lenovo("LAPTOP LENOVO", true);
console.log(lenovo.on());
console.log(lenovo.off());
let apple = new Macbook("LAPTOP MACBOOK", true);
console.log(apple.on());
console.log(apple.off());
