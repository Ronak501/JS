function user(username){
    this.username = username;
}

function customer(username, id, password){
    user.call(this, username);
    this.id = id;
    this.password = password;
}

const ronak = new customer("ronak", 501, "Ronak_51");

console.log(ronak);