const span = document.querySelectorAll('span');
const body = document.querySelector('body');
// console.log(span);
span.forEach((span) => {
    span.addEventListener('click', (event) => {
        if(span.id === "grey"){
            body.style.backgroundColor = "grey";
        }
        if(span.id === "white"){
            body.style.backgroundColor = "white";
        }
        if(span.id === "blue"){
            body.style.backgroundColor = "blue";
        }
        if(span.id === "yellow"){
            body.style.backgroundColor = "yellow";
        }
    })
})