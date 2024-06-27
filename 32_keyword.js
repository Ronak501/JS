function user(username, loginCount, logined){
    this.username= username;
    this.loginCount = loginCount;
    this.logined= logined;

    return this;
}

const rk = new user("Ronak", 13 , true);
const ronak = new user("rk", 1, false);

console.log(ronak);
console.log(rk);
// new keyword ek new inheritant banave je aapne function ni new copy aape
// this keyword aapne current context ni value aape and only this all value aape 
// return this na karvi to pan chale because auto return thai jai
// new ek empty object banave jema badhi value store thai



// first: new object creat thai
// second:consturct function call thai
// third:all value this ma inject thai jai
// /four:badhu function ma mali jai