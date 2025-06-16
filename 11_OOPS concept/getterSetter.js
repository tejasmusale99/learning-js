class User {
    constructor(email,password) {
        this.email = email,
        this.password = password
    }

    get password(){
        return "***********"
    }

    set password(value){
        this._password = value
    }
}


const tejas = new User("tejas@com", "tejas@123")

console.log(tejas.password) //**********/
console.log(tejas);
