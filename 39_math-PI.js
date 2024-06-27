const ronak = Object.getOwnPropertyDescriptor(Math, 'PI')

// console.log(ronak);

const rk = {
    name:"ronak",
    email:"ronaktalaviya51@gmail.com",
    id:51,
    address: function(){
        console.log("hiee");
    }
}

Object.defineProperty(rk,'name',{
    writable:false,
    enumerable: true
})

for (const [key, value] of Object.entries(rk)) {
    if(typeof value !== 'function'){
        console.log(`${key} : ${value}`);
    }
}