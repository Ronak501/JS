const BASE_URL ="https://api.currencyapi.com/v3/latest?apikey=fca_live_eQYCAy3N2gA2dmq1g2kh1KmzMOV8eRTlZFKr7rd4";
let dropdowns = document.querySelectorAll(".dropdown select");
let btn = document.querySelector("button");
let fromcurr = document.querySelector(".from select");
let tocurr = document.querySelector(".to select");
let msg = document.querySelector(".msg");

window.addEventListener("load" , () => {
     update();
})

for(let select of dropdowns) {
     for (currcode in countryList){
          let newoption = document.createElement("option");
          newoption.innerText = currcode;
          newoption.value=currcode;
          if(select.name === 'from' && currcode ==="INR"){
               newoption.selected = "selected";
          }
          else if(select.name === 'to' && currcode ==="USD"){
               newoption.selected = "selected";
          }
          select.append(newoption);
     }
     select.addEventListener("change", (evt) => {
          updateflag(evt.target);
     });
}

const updateflag = async (element) => {
     let currcode = element.value;
     let countrycode = countryList[currcode];
     let newsrc = `https://flagsapi.com/${countrycode}/flat/64.png`;
     let img = element.parentElement.querySelector("img");
     img.src = newsrc;
     update(currcode);
}

btn.addEventListener("click", (evt) => {
     evt.preventDefault();
     update();
})

const update = async () => {
     let amount = document.querySelector(".amount input")
     let amtval = amount.value;
     if(amtval === "" || amtval < 1){
          amtval=1;
          amount.value= "1";        
     }    

     let response = await fetch(BASE_URL);
     let shreya = await response.json();
     let rate = shreya.data;
     let flname = tocurr.value;
     let ratename = rate[flname];
     let prize = await ratename.value;

     let finalamount = amtval * prize;
     msg.innerText = `${amtval} ${fromcurr.value} = ${finalamount} ${tocurr.value}`;
}
