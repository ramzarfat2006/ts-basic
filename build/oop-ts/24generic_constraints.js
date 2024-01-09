"use strict";
// function General<M>(arg:M):M{
//     return arg
// }
function General(arg) {
    console.log(arg.length);
    return arg;
}
const hasil = General("Generic_Constraints");
console.log(hasil);
const result = General({ length: 99, value: 888 });
