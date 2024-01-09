function getData(value:any){
    return value
}

const data1 = getData(9999)
console.log(data1)

function getData2<T>(value:T){
    return value
}

const data2 = getData2<string>("ASU")
console.log(data2.length)

const data21 = getData2<number>(98786)
console.log(data21.toExponential(6))