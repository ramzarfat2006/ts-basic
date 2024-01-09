// interface hanya bisa memakai object 
type Hape = string
type PC = number

type Halo = {
    phone:string
    PC:number
}

interface AAA{
    phone:string
    PC:number
}

// interface bisa dimerge/digabungkan, sedangkan type tidak
interface Dino {
    name:string
}

interface Dino{
    weight:number
}

// kalau interface bisa melakukan extends & implements sebuah class, sedangkan type tidak bisa

// dan sebenarnya type itu bisa ngemerge juga seperti interface cuman beda caranyaa :
type Name = {
    name:string
}

type Age = {
    age:number
}

type Employee1 = Name & Age
const employee: Employee1 = {
    name: "Arfan",
    age: 18
}

type Employee2 = Name | Age
const employee2: Employee2 = {
    name: "Arfan"
}

// pakailah interface jika ingin membuat sebuah objek baru / ketika kalian membuat class itu cocoknya memakai interface
// dan pakailah type jika ingin membuat sebuah variable / function