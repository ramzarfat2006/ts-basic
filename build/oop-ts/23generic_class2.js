"use strict";
class Kelas {
    constructor() {
        this.name = "Kelas A";
    }
}
class KelasBaru {
    constructor(classProp) {
        this.classProp = classProp;
    }
}
const cls = new Kelas();
const clsBaru = new KelasBaru(cls);
