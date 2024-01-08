export class User{
    constructor(public name:string,public age:number){
    }
    setName(value:string):void{
        this.name = value
    }
    getName = ():string =>{
        return this.name
    }
}


// public = bisa di akses di semua class / dari luar class
// protected = hanya bisa di akses dari class tersebut, dan kelas turunannya
// private = hanya bisa di akses dari class itu sendiri

class Admin extends User{
    read: boolean = true
    write: boolean = true
    phone: string
    private _email: string = ""
    static getRoleName: string = "Admin"

    constructor(phone:string,name:string,age:number){
        super(name,age)
        this.phone = phone
    }

    static getNameRole(){
        return "Hey"
    }

    getRole(): {read:boolean,write:boolean}{
        return {
            read: this.read,
            write: this.write
        }
    }
    set email(value:string){
        if(value.length < 5){
            this._email = "Email Salah"
        } else {
            this._email = value
        }
    }
    get email():string{
        return this._email
    }
}

let admin = Admin.getNameRole()
console.log(admin)