import Lenovo from "./Lenovo";
import Macbook from "./Macbook";

let lenovo = new Lenovo("Thinkpad",true,true)
console.log(lenovo)

let macbook = new Macbook(2004,false,false)
console.log(macbook)
macbook.a()
macbook.b()