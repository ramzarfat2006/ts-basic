"use strict";
// implements: kelas harus mengimplementasikan metode dan property
class Kijang {
    constructor() {
        this.name = "Livina";
        this.wheel = 4;
        this.doors = 4;
    }
    start() {
        throw new Error("Method not implemented.");
    }
}
const mobil = new Kijang();
console.log(mobil);
