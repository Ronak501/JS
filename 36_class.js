class user{
    constructor(username, password, email){
        this.username = username;
        this.password = password;
        this.email = email;
    }

    encryptpassword(){
        return `${this.password}@51`
    }

    changeUsername(){
        return `${this.username.toLowerCase()}`
    }
}

const rk = new user("Ronak", "ronak", "ronak@gamil.com");

console.log(rk.encryptpassword());
console.log(rk.changeUsername());

// behind the scene

function User(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}


const tea = new User("tea", "tea@gmail.com", "123")

console.log(tea.encryptPassword());
console.log(tea.changeUsername());