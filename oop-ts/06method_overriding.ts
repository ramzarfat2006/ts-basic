class Hewan7{
    name:string = ""

    bernafas(){
        console.log("Hewan Sedang Bernafas")
    }
}

class Katak2 extends Hewan7{
    bernafas(){
        console.log("Katak Sedang Bernafas")
    }
}

// jika 2 class memiliki method yang sama dijalankan maka yang akan dijalankan adalah child class terlebih dahulu / parent class akan dihiraukan
const katak2 =  new Katak2()
katak2.bernafas()