const firstPromise = new Promise((res, rej)=> {
    const error = false;
    if (!error) {
        setTimeout(()=>{
            const rk = {
                name: "ronak",
                email:"ronaktalaviya51@gmail.com"
            }
            res(rk)
        }, 1000)
    }else{
        const rk = "Something Went Wrong";
        rej(rk);
    }
})

firstPromise.then((data)=>{
    console.log(data.email);
})
.catch((err)=>{
    console.log(err);
})