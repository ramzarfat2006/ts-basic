// function General<M>(arg:M):M{
//     return arg
// }

interface Length{
    length:number
}

function General<M extends Length>(arg:M):M{
    console.log(arg.length)
    return arg
}

const hasil = General("Generic_Constraints")
console.log(hasil)

const result = General({length:99,value:888})