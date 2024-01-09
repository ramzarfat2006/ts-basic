"use strict";
// Namespace membantu menghindari konflik nama, terutama jika Anda bekerja dengan kode yang besar atau jika mengintegrasikan beberapa pustaka atau modul yang mungkin memiliki nama-nama yang sama.
var Example;
(function (Example) {
    class Hewan {
    }
    Example.Hewan = Hewan;
    Example.kodok = new Hewan();
})(Example || (Example = {}));
const jangkrik = new Example.Hewan();
let katak = Example.kodok;
