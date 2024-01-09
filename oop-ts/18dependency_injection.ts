class Store{
    private name:string = "VapeStore"
    private profit:number = 2500

    getName():string{
        return this.name
    }

    getProfit():number{
        return this.profit
    }
}

class Store2{
    private name:string = "VapeStored2"
    private profit:number = 25000

    getName():string{
        return this.name
    }

    getProfit():number{
        return this.profit
    }
}

class FashionProduct{
    private store:Store
    private name:string
    private price:number

    constructor(name:string,price:number){
        this.name = name
        this.price= price

        this.store = new Store()
    }

    sell():void{
        console.log(`${this.name} harga jualnya adalah ${this.store.getProfit() + this.price}`)
    }
}

class TechProduct{
    private store:Store
    private name:string
    private price:number

    constructor(name:string,price:number){
        this.name = name
        this.price= price

        this.store = new Store()
    }

    sell():void{
        console.log(`${this.name} harga jualnya adalah ${this.store.getProfit() + this.price}`)
    }
}

const klambi = new FashionProduct("Baju Kasual",150000)
klambi.sell()

// ----------------- // // -----------------//
interface IStore{
    name:string
    profit:number
    getProfit():number
}

class TokoLama implements IStore{
    name:string = "Toko Lama"
    profit:number = 1000

    getName():string{
        return this.name
    }

    getProfit():number{
        return this.profit
    }
}

class TokoBaru implements IStore{
    name:string = "Toko Baru"
    profit:number = 2000

    getName():string{
        return this.name
    }

    getProfit():number{
        return this.profit
    }
}

class HijabProduct{
    private store:IStore
    private name:string
    private price:number

    constructor(store:IStore,name:string,price:number){
        this.name = name
        this.price= price

        this.store = store
    }

    sell():void{
        console.log(`${this.name} harga jualnya adalah ${this.store.getProfit() + this.price}`)
    }
}

class FoodProduct{
    private store:IStore
    private name:string
    private price:number

    constructor(store:IStore,name:string,price:number){
        this.name = name
        this.price= price

        this.store = store
    }

    sell():void{
        console.log(`${this.name} harga jualnya adalah ${this.store.getProfit() + this.price}`)
    }
}

const tokoLama = new TokoLama()
const tokoBaru = new TokoBaru()

const hijab = new HijabProduct(tokoLama,"Hijab Pasmina",55000)
const hijab2 = new HijabProduct(tokoBaru,"Hijab Pasmina",55000)

console.log(hijab)
console.log(hijab2)

hijab.sell()
hijab2.sell()