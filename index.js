

var attemptCount = 0;
var randomNumber;
var guess = document.getElementById("userGuess");
var submit = document.getElementById("submit");
var replay = document.getElementById("replay"); 
var hint = document.getElementById("hint");
var attemptsDisplay = document.getElementById("attempt");
var difficulty = "easy"; 

function startGame(level) {
  attemptCount = 0;
  difficulty = level;
  
  // Set random number range based on level
  if (difficulty === "easy") {
    randomNumber = Math.floor(Math.random() * 10 + 1);
  } else if (difficulty === "medium") {
    randomNumber = Math.floor(Math.random() * 50 + 1);
  } else if (difficulty === "hard") {
    randomNumber = Math.floor(Math.random() * 100 + 1);
  }
  
  guess.value = "";
  hint.textContent = ""; 
  attemptsDisplay.textContent = "Attempts: 0"; 
}
function resetGame() {
  startGame(difficulty);
}

submit.addEventListener("click", checkGuess);
replay.addEventListener("click", resetGame); 

function checkGuess() {
  var userValue = Number(guess.value);
  attemptCount++;
  
  if (userValue === randomNumber) {
    hint.textContent = "Congratulations, You guessed it!";
  } else if (userValue < randomNumber) {
    hint.textContent = "Too low! Try again.";
  } else {
    hint.textContent = "Too high! Try again.";
  }

  attemptsDisplay.textContent = "Attempts: " + attemptCount;
}

// Start with the easy level
startGame("easy");
