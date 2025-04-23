let randomNum = parseInt(Math.random() * 100 + 1);
const guessSubmit = document.querySelector("#submt_button");
const userGuess = document.querySelector("#input_guess");
const PrevUserGuess = document.querySelector("#previous_guesses");
const RemainingGuess = document.querySelector("#remaining_guesses");
const lowOrHi = document.querySelector("#lowOrHigh");
const startOver = document.querySelector(".result");

const p = document.createElement("p");

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  guessSubmit.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = parseInt(userGuess.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert("Enter valid number");
  } else if (guess < 1) {
    alert("Enter a number greater than 0");
  } else if (guess > 100) {
    alert("Enter a number less than 100");
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage("Game over");
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNum) {
    displayMessage("you guessed it right");
    endGame();
  } else if (guess < randomNum) {
    displayMessage("Number is too low");
  } else if (guess > randomNum) {
    displayMessage("Number is too high");
  }
}

function displayGuess(guess) {
  userGuess.value = "";
  PrevUserGuess.innerHTML += ` ${guess},   `;
  numGuess++;
  RemainingGuess.innerHTML = `Guesses Remaining: ${11 - numGuess}`;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h5>${message}</h5>`;
}

function endGame() {
  userGuess.value = "";
  userGuess.setAttribute("disabled", "");
  p.classList.add("startOverButton");
  p.innerHTML = `<h2 id="newGame">start new game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector("#newGame");
  newGameButton.addEventListener("click", function (e) {
    randomNum = parseInt(Math.random() * 100 + 1);
    prevGuess = []
    numGuess = 1
    PrevUserGuess.innerHTML ='' 
    RemainingGuess.innerHTML =`Guesses Remaining  ${11 - numGuess}`;
    userGuess.removeAttribute('disabled')
    startOver.removeChild(p)
    playGame = true;
  });
}
