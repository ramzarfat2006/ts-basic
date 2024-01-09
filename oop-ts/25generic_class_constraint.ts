interface Produk{
    sell():void
}

class CarProduk implements Produk{
    sell(): void {
        console.log(`jual mobil`)
    }
}

class MotorProduk implements Produk{
    sell(): void {
        console.log(`jual motor`)
    }
}

function sellProduk<M extends Produk>(products:M[]):void{
    products.forEach(product => product.sell())
}

const anu = new CarProduk()
const anu2 = new MotorProduk()

sellProduk([anu,anu2])