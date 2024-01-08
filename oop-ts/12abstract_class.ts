abstract class Hewan9{
    name:string

    constructor (name:string){
        this.name = name
    }

    Makan(): void{
        console.log(`${this.name} sedang makan`)
    }

    abstract Bergerak(): void
}

class Kucing3 extends Hewan9{
    constructor(){
        super("Kucing")
    }

    Bergerak(): void {
        console.log(`Kucing Berjalan`)
    }
}

class Burung2 extends Hewan9{
    constructor(){
        super("Burung")
    }

    Bergerak(): void {
        console.log(`Burung Terbang`)
    }
}

const kucing4 = new Kucing3()
kucing4.Bergerak()

const burung2 = new Burung2()
burung2.Bergerak()