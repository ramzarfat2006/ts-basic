"use strict";
function GenericsFunction(value) {
    let data = {
        prop: value
    };
    return data;
}
console.log(GenericsFunction("String"));
console.log(GenericsFunction(100028392));
console.log(GenericsFunction(true));
