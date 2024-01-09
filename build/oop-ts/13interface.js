"use strict";
class Oppo {
    constructor(name) {
        this.name = name;
    }
    menu() {
        console.log("Menu Tapped");
    }
    home() {
        console.log("Home Tapped");
    }
    back() {
        console.log("Back Tapped");
    }
}
class Asus {
    constructor(name) {
        this.name = name;
    }
    menu() {
        console.log("Menu Tapped");
    }
    home() {
        console.log("Home Tapped");
    }
    back() {
        console.log("Back Tapped");
    }
}
class Game {
    constructor(phone) {
        this.phone = phone;
    }
    back() {
        console.log(`Kembali ke menu utama game`);
    }
    menu() {
        this.phone.menu();
    }
    home() {
        this.phone.home();
    }
}
const oppo = new Oppo("A12");
const game = new Game(oppo);
game.home();
game.back();
game.menu();
class Iphone {
    constructor(name) {
        this.name = name;
    }
    home() {
        console.log(`Muncul Global`);
    }
}
const iphone = new Iphone(`Iphone XR`);
