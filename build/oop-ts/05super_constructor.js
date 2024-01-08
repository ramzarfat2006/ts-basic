"use strict";
class Hewan6 {
    constructor(nama, kaki) {
        this.nama = nama;
        this.kaki = kaki;
    }
}
class Kodok extends Hewan6 {
    constructor(nama, kaki, beracun) {
        super(nama, kaki);
        this.beracun = beracun;
    }
}
const Kodok2 = new Kodok("Katak", 4, false);
console.log(Kodok2);
