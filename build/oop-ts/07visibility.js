"use strict";
// public = bisa di akses di semua class / dari luar class
// protected = hanya bisa di akses dari class tersebut, dan kelas turunannya
// private = hanya bisa di akses dari class itu sendiri
class Hewan8 {
    constructor(nama, kaki, mamalia) {
        this.nama = nama;
        this.kaki = kaki;
        this.mamalia = mamalia;
    }
    berjalan() {
    }
}
class Katak3 extends Hewan8 {
    constructor() {
        super(...arguments);
        this.umurTelur = 4;
        this.umurKecebong = 7;
        this.umurKatak = 90;
    }
    getUmur() {
        console.log(this.umurTelur + this.umurKecebong + this.umurKatak);
    }
}
const katak3 = new Katak3("Gamabunta", 4, false);
console.log(katak3);
