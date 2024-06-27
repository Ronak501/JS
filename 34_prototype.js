Object.prototype.truelength = function (){
    // console.log(`The True Lenght Of String ${this.trim().length ? this.trim().length : this.length}`)
    console.log(typeof this)
}

let name = "ronak    "
let rk = ["ronak", "rk", "shreya"]

// name.truelength()
// rk.truelength()

function data(name, score){
    this.name= name;
    this.score = score;
}

data.prototype.printMe = function(){
    console.log(`i am present in any were ${this.name}`);
    console.log(`my score is ${this.score}`);
}

const shreya = new data('shreya', 143)

shreya.printMe()