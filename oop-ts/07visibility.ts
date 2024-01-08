// public = bisa di akses di semua class / dari luar class
// protected = hanya bisa di akses dari class tersebut, dan kelas turunannya
// private = hanya bisa di akses dari class itu sendiri

class Hewan8{
    public nama: string
    private kaki: number
    protected mamalia: boolean

    constructor(nama:string,kaki:number,mamalia:boolean){
        this.nama = nama
        this.kaki = kaki
        this.mamalia = mamalia
    }

    berjalan(){

    }
}

class Katak3 extends Hewan8{
    private umurTelur: number = 4
    private umurKecebong: number = 7
    private umurKatak: number = 90

    getUmur(){
        console.log(this.umurTelur + this.umurKecebong + this.umurKatak)
    }
}

const katak3 = new Katak3("Gamabunta",4,false)
console.log(katak3)