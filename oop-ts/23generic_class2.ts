class Kelas{
    name:string = "Kelas A"
}

class KelasBaru<M>{
    classProp:M

    constructor(classProp:M){
        this.classProp = classProp
    }
}

const cls = new Kelas()
const clsBaru = new KelasBaru(cls)