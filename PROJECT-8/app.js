let userscore=0;
let comscore=0;

const choices = document.querySelectorAll(".shape");
const msgcontainer = document.querySelectorAll(".msgcontainer");
const msg = document.querySelector("#msg");
const user = document.querySelector("#user");
const comp = document.querySelector("#comp");

const gencomp = () => {
     let option = ["rock","paper","scissors"];
     const random = Math.floor(Math.random()*3);
     return option[random];
}

const drawgame = () => {
     console.log("draw game");
     msg.innerText = "Game Was Draw";
     msg.style.backgroundColor = "#081b31";
}

const showwinner = (userwin,userchoice,comchoice) => {
     if(userwin){
          userscore++;
          msg.innerText = `You Win! Your ${userchoice} beats ${comchoice}`;
          msg.style.backgroundColor = "green";
          user.innerText = userscore;
     }
     else{
          comscore++;
          msg.innerText = `Computer Win! ${comchoice} beats Your${userchoice}`;
          msg.style.backgroundColor = "red";
          comp.innerText = comscore;
     }
}

const playgame = (userchoice) => {
     console.log("shape was click", userchoice);
     const comchoice = gencomp();
     console.log("comp was click", comchoice);

     if(userchoice===comchoice){
          drawgame();
     }
     else{
          let userwin = true;
          if(userchoice === "rock")
          {
               userwin = comchoice === "paper"?false :true;
          }
          else if(userchoice === "paper")
          {
               userwin = comchoice === "scissors"?false :true;
          }
          else
          {
               userwin = comchoice === "rock"?false :true;
          }
          showwinner(userwin,userchoice,comchoice);
     }
};

choices.forEach((shape) => {
     shape.addEventListener("click", () =>{
         const userchoice = shape.getAttribute("id");
          playgame(userchoice);
     })
}) 