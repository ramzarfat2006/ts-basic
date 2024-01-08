import Laptop from "./BaseLaptop";

class Macbook<T> extends Laptop<T>{
    constructor(type: T,numeric:boolean,touchButton:boolean){
        super("MACBOOK",type,numeric,touchButton)
    }
}
export default Macbook