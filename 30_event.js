/*
const first = document.querySelector("#first");
const second = document.querySelector("#second");
const third = document.querySelector("#que");

document.addEventListener("click", (e) => {
    const rk = e.target.parentElement.id;
    // console.log("ronak;");
    if(rk === "first"){
        // console.log(first.children); 
        first.remove();
    }
    else if(rk === "second"){
        second.remove();
    }
    else if(rk === "third"){
        third.remove();
    }
    
    if(rk === "first"){
        document.body.appendChild(first);
    }
    else if(rk === "second"){
        document.body.appendChild(second);
    }
    else if(rk === "third"){
        document.body.appendChild(third);
    }
}, false)
*/

const ronak = document.querySelector(".ronak");
const sh = document.querySelector(".rk");
const btn = document.getElementById("btn");

btn.addEventListener("click", (rk) => {
    const p = document.createElement("p");
    p.setAttribute("id" ,"rk");
    p.setAttribute('class', "sh");
    // console.log(p);
    const value = document.createTextNode(ronak.value);
    p.appendChild(value);
    const shChild = sh.children;
    const newArr = Array.from(shChild);
    if (newArr.length >= 2) {
        sh.childNodes[0].remove();
        sh.appendChild(p);
    }else{
        sh.appendChild(p);
    }
},false);

// console.log(btn);
