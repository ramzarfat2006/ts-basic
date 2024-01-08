"use strict";
class Ayam {
    static jalan() {
        console.log(`Ayam berjalan dengan ${this.kaki} kaki`);
    }
    getKaki() {
        console.log(Ayam.kaki);
        // console.log(this.kaki)
    }
}
Ayam.kaki = 2;
console.log(Ayam.jalan());
const pitik = new Ayam();
pitik.getKaki();
const ayam1 = new Ayam();
const ayam2 = new Ayam();
const ayam3 = new Ayam();
const ayam4 = new Ayam();
Ayam.kaki = 7;
console.log(ayam1.getKaki());
console.log(ayam2.getKaki());
console.log(ayam3.getKaki());
console.log(ayam4.getKaki());
