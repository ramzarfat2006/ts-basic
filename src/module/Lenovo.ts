import Laptop from "./BaseLaptop";

class Lenovo<T> extends Laptop<T>{
    constructor(type: T,numeric:boolean,touchButton:boolean){
        super("LENOVO",type,numeric,touchButton)
    }
}
export default Lenovo