let rendomNumber = parseInt(Math.random() * 100 + 1);
// const form = document.querySelector("form");
const userInput = document.getElementById("guessField");
const submit = document.getElementById("subt");
const startOver = document.querySelector(".resultParas");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");

let p = document.createElement("p");

let previousGuess = [];
let newGuess = 1;

let playGame = true;

if(playGame){
    submit.addEventListener("click", (e) => {
        e.preventDefault();
        const guess = parseInt(userInput.value);
        validateGuess(guess);
    })
}

function validateGuess(guess){
    if(guess < 1 || guess > 100 || isNaN(guess)){
        alert('plz enter a between 1 and 100');
    }
    previousGuess.push(guess);
    if(newGuess === 10){
        displayGuess(guess);
        displayMessage(`You lost. The number was ${rendomNumber}`);
        endGame();
    }else{
        displayGuess(guess);
        checkGuess(guess);
    }
}

function checkGuess(guess){
    if(guess === rendomNumber){
        displayMessage(`You won. The number was ${rendomNumber}`);
        endGame();
    }else if(guess >rendomNumber){
        displayMessage("Too high");
    }
    else if(guess<rendomNumber){
        displayMessage("Too low");
    }
}

function displayGuess(guess){
    userInput.value = "";
    guessSlot.innerHTML += `${guess}, `;
    remaining.innerHTML = `${10 - newGuess}`;
    newGuess++;
}

function displayMessage(message){
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame(){
    userInput.value = "";
    userInput.setAttribute("disabled", '');
    p.classList.add('button');  
    p.innerHTML ='<h2 id="newGame">start new game</h2>'
    startOver.appendChild(p);
    playGame = false;
    newGame();
}

function newGame(){
    const newgameButton = document.getElementById("newGame");
    newgameButton.addEventListener("click", (e) => {
        rendomNumber = parseInt(Math.random() * 100 + 1);
        previousGuess = [];
        newGuess = 1;
        guessSlot.innerHTML ='';
        remaining.innerHTML = 10;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);
        playGame = true;
    })
}