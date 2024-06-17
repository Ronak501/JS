const clock = document.querySelector("#clock");

// time.toLocaleString()
setInterval(()=>{
    let time = new Date();   
    clock.innerHTML = time.toLocaleTimeString();
},1000)