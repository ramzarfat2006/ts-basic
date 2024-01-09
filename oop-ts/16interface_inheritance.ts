interface Vehicle{
    name:string
    wheel:number
}

// extends: Kelas mendapatkan semua metode dan properti ini dari induknya, jadi Anda tidak perlu mengimplementasikannya.
interface Car extends Vehicle{
    doors:number
}

// implements: kelas harus mengimplementasikan metode dan property
class Kijang implements Car{
    wheels!: number
    start(): void {
        throw new Error("Method not implemented.")
    }
    name: string = "Livina"
    wheel:number = 4
    doors:number = 4
}

const mobil = new Kijang()
console.log(mobil)