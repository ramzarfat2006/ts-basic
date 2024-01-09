"use strict";
class Store {
    constructor() {
        this.name = "VapeStore";
        this.profit = 2500;
    }
    getName() {
        return this.name;
    }
    getProfit() {
        return this.profit;
    }
}
class Store2 {
    constructor() {
        this.name = "VapeStored2";
        this.profit = 25000;
    }
    getName() {
        return this.name;
    }
    getProfit() {
        return this.profit;
    }
}
class FashionProduct {
    constructor(name, price) {
        this.name = name;
        this.price = price;
        this.store = new Store();
    }
    sell() {
        console.log(`${this.name} harga jualnya adalah ${this.store.getProfit() + this.price}`);
    }
}
class TechProduct {
    constructor(name, price) {
        this.name = name;
        this.price = price;
        this.store = new Store();
    }
    sell() {
        console.log(`${this.name} harga jualnya adalah ${this.store.getProfit() + this.price}`);
    }
}
const klambi = new FashionProduct("Baju Kasual", 150000);
klambi.sell();
class TokoLama {
    constructor() {
        this.name = "Toko Lama";
        this.profit = 1000;
    }
    getName() {
        return this.name;
    }
    getProfit() {
        return this.profit;
    }
}
class TokoBaru {
    constructor() {
        this.name = "Toko Baru";
        this.profit = 2000;
    }
    getName() {
        return this.name;
    }
    getProfit() {
        return this.profit;
    }
}
class HijabProduct {
    constructor(store, name, price) {
        this.name = name;
        this.price = price;
        this.store = store;
    }
    sell() {
        console.log(`${this.name} harga jualnya adalah ${this.store.getProfit() + this.price}`);
    }
}
class FoodProduct {
    constructor(store, name, price) {
        this.name = name;
        this.price = price;
        this.store = store;
    }
    sell() {
        console.log(`${this.name} harga jualnya adalah ${this.store.getProfit() + this.price}`);
    }
}
const tokoLama = new TokoLama();
const tokoBaru = new TokoBaru();
const hijab = new HijabProduct(tokoLama, "Hijab Pasmina", 55000);
const hijab2 = new HijabProduct(tokoBaru, "Hijab Pasmina", 55000);
console.log(hijab);
console.log(hijab2);
hijab.sell();
hijab2.sell();
