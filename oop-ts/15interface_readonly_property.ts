interface Student{
    readonly name:string    
    readonly age:number    
}

let murid:Student = {
    name: "Ramzi Arfan Fatiha",
    age: 17
}

murid.name!= "kahsdka" // fungsi readonly adalah agar value tidak bisa diubah dalam sebuah property sama halnya seperti const

console.log(murid)