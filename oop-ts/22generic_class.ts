interface Generics4<M>{
    prop:M
    method():M
}

class GenericClass<M> implements Generics4<M>{
    prop: M

    constructor(prop:M){
        this.prop = prop
    }

    method(): M {
        return this.prop
    }
}

const genericClass = new GenericClass<number>(12312342)
console.log(genericClass.method())