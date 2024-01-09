interface AndroidPhone{
    name: string
    menu():void
    home():void
    back():void
}

class Oppo implements AndroidPhone{
    name!: string

    constructor(name:string){
        this.name = name
    }

    menu(): void {
        console.log("Menu Tapped")
    }

    home(): void {
        console.log("Home Tapped")
    }

    back(): void {
        console.log("Back Tapped")
    }
    
}

class Asus implements AndroidPhone{
    name!: string

    constructor(name:string){
        this.name = name
    }

    menu(): void {
        console.log("Menu Tapped")
    }

    home(): void {
        console.log("Home Tapped")
    }

    back(): void {
        console.log("Back Tapped")
    }
}

class Game {
    private phone: AndroidPhone

    constructor(phone:AndroidPhone){
        this.phone = phone
    }

    back(){
        console.log(`Kembali ke menu utama game`)
    }

    menu(){
        this.phone.menu()
    }

    home(){
        this.phone.home()
    }
}

const oppo = new Oppo("A12")

const game = new Game(oppo)
game.home()
game.back()
game.menu()

interface ApplePhone{
    home():void
}

class Iphone implements ApplePhone{
    name: string

    constructor(name:string){
        this.name = name
    }

    home(): void {
        console.log(`Muncul Global`)
    }
}

const iphone = new Iphone(`Iphone XR`)