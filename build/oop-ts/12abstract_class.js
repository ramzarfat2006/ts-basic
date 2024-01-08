"use strict";
class Hewan9 {
    constructor(name) {
        this.name = name;
    }
    Makan() {
        console.log(`${this.name} sedang makan`);
    }
}
class Kucing3 extends Hewan9 {
    constructor() {
        super("Kucing");
    }
    Bergerak() {
        console.log(`Kucing Berjalan`);
    }
}
class Burung2 extends Hewan9 {
    constructor() {
        super("Burung");
    }
    Bergerak() {
        console.log(`Burung Terbang`);
    }
}
const kucing4 = new Kucing3();
kucing4.Bergerak();
const burung2 = new Burung2();
burung2.Bergerak();
