// Namespace membantu menghindari konflik nama, terutama jika Anda bekerja dengan kode yang besar atau jika mengintegrasikan beberapa pustaka atau modul yang mungkin memiliki nama-nama yang sama.
namespace Example{
    export class Hewan{

    }

    export const kodok = new Hewan()
}

const jangkrik = new Example.Hewan()
let katak = Example.kodok