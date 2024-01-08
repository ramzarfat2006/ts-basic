interface Laptop{
    name: string
    on(): void
    off(): void
}

class Lenovo implements Laptop{
    name!: string
    isGaming!: boolean
    
    constructor(name:string,isGaming:boolean){
        this.name = name
        this.isGaming = isGaming
    }
    on(): void {
        console.log("nyala")
    }
    off(): void {
        console.log("mati")
    }
}

class Macbook implements Laptop{
    name!: string
    keyboardLight!: boolean

    constructor(name:string,keyboardLight:boolean){
        this.name = name
        this.keyboardLight = keyboardLight
    }
    on(): void {
        console.log("nyala")
    }
    off(): void {
        console.log("mati")
    }
}
let lenovo = new Lenovo("LAPTOP LENOVO",true)
console.log(lenovo.on())
console.log(lenovo.off())

let apple = new Macbook("LAPTOP MACBOOK",true)
console.log(apple.on())
console.log(apple.off())