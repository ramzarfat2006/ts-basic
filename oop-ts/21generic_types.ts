type Generics2<M> = M

interface Generics3<M>{
    asdasdas:M
}

function GenericsFunction2<M>(value:M):Generics2<M>{
    return value
}

console.log(GenericsFunction2<string>("STRING"))