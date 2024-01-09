"use strict";
class GenericClass {
    constructor(prop) {
        this.prop = prop;
    }
    method() {
        return this.prop;
    }
}
const genericClass = new GenericClass(12312342);
console.log(genericClass.method());
