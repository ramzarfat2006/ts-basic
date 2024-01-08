class Hewan3{
    // variabel yang berada di dalam class dinamakan property
    nama: string = ""
    kaki: number = 0
    mamalia: boolean = false

    // function yang berada di dalam class dinamakan method
    bernafas(){
        console.log(`${this.nama} sedang bernafas`)
    }
}

const hewan3 = new Hewan3()
console.log(hewan3)

// jika ingin mengisi property pada class cukup panggil
hewan3.nama = "Kucing"
hewan3.kaki = 4
hewan3.mamalia = true
console.log(hewan3)
hewan3.bernafas()