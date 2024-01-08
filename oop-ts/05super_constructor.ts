class Hewan6{
    nama: string
    kaki: number

    constructor(nama:string,kaki:number){
        this.nama = nama
        this.kaki = kaki
    }
}

class Kodok extends Hewan6{
    beracun: boolean

    constructor(nama:string,kaki:number,beracun:boolean){
        super(nama,kaki)
        this.beracun = beracun
    }
}

const Kodok2 = new Kodok("Katak",4,false)
console.log(Kodok2)
