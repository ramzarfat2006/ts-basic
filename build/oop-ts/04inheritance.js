"use strict";
class Hewan5 {
    constructor() {
        this.nama = "";
        this.kaki = 0;
    }
    berjalan() {
        console.log("Berjalan");
    }
}
class Kucing extends Hewan5 {
    constructor() {
        super(...arguments);
        this.warna = "biru";
    }
}
const kucing3 = new Kucing();
kucing3.nama = "Willy";
kucing3.kaki = 4;
kucing3.warna = "Putih";
console.log(kucing3);
kucing3.berjalan();
