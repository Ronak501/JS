class user{
    constructor(username, password){
        this.username = username,
        this.password = password
    }

    get password(){
        return this._password.toUpperCase();
    }

    set password(value){
        this._password = value;
    }
}

const rk = new user("Ronak", "rk_51");

console.log(rk.password);