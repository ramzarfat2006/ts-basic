"use strict";
class CarProduk {
    sell() {
        console.log(`jual mobil`);
    }
}
class MotorProduk {
    sell() {
        console.log(`jual motor`);
    }
}
function sellProduk(products) {
    products.forEach(product => product.sell());
}
const anu = new CarProduk();
const anu2 = new MotorProduk();
sellProduk([anu, anu2]);
