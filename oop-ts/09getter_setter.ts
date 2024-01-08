class Product{
    private _price:number = 0
    private discount:number = 0.05

    // getter digunakan untuk mengambil nilai properti
    get price(){
        return this._price
    }
    // setter digunakan untuk mengatur nilai properti
    set price(value:number){
        this._price = value - (value * this.discount)
    }
}

const produk = new Product()
produk.price = 3000
console.log(produk.price)