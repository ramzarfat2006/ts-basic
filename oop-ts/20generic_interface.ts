interface Generics<M>{
    prop: M
}

function GenericsFunction<M>(value:M):Generics<M>{
    let data:Generics<M> = {
        prop:value
    }

    return data
}

console.log(GenericsFunction<string>("String"))
console.log(GenericsFunction<number>(100028392))
console.log(GenericsFunction<boolean>(true))
