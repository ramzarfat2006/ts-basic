class Hewan4{
    nama: string
    kaki: number

    constructor(nama:string,kaki:number){
        this.nama = nama
        this.kaki = kaki
    }
}

const kucing = new Hewan4("Kucing",4)
console.log(kucing)

// constructor yg lebih simple
class Hewan41{
    constructor(public nama:string,public kaki:number){}
}

const kucing2 = new Hewan41("Kambing",4)
console.log(kucing2)