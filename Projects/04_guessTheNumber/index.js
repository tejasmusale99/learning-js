const randomNum = parseInt(Math.random()*100+1); 
const guessSubmit = document.querySelector("#submt_button");
const userGuess = document.querySelector("#input_guess");
const PrevUserGuess = document.querySelector("#previous_guesses");
const RemainingGuess = document.querySelector("#remaining_guesses");
const lowOrHi = document.querySelector("#lowOrHigh");
const startOver = document.querySelector("#result");

