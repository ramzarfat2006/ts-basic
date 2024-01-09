class Animal{
    name:string

    constructor(name:string){
        this.name = name
    }
}

interface Cat extends Animal{
    meong(): void
}

class Kuceng implements Cat{
    name: string

    constructor(name:string){
        this.name = name
    }

    meong(): void {
        console.log(`MWEONGGGGG MWEONGGG`)
    }
}