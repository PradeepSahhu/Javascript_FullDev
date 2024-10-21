const guessSubmit = document.querySelector(".guessSubmit");
let showUserMessage = document.querySelector(".lowOrHi");
let guessSlot = document.querySelector(".guesses");
let guessRemaining = document.querySelector(".lastResult");
let result = document.querySelector(".resultParas");
let userGuess = document.querySelector(".guessField");
let counter = 10;

let playGame = true;

let previousGuess = [];
const p = document.createElement("p");

function randomNumberGenerator() {
  return Math.ceil(Math.random() * 100) + 1;
}

let randomNumber = randomNumberGenerator();

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert("pleas enter a valid number");
  } else if (guess < 1) {
    alert("pleas enter a valid number");
  } else if (guess > 100) {
    alert("pleas enter a valid number");
  } else {
    // endGame();
    previousGuess.push(guess);
    checkGuess(guess);
  }
}
function checkGuess(guess) {
  if (guess < randomNumber) {
    counter--;
    displayMessage("Your Number is too low");

    displayGuess(guess);
  } else if (guess == randomNumber) {
    displayMessage("Hurrey!!! You won!!!");

    displayGuess(guess);
    endGame();
  } else if (guess > randomNumber) {
    counter--;
    displayMessage("Your Number is too high");

    displayGuess(guess);
  }
}

function displayGuess(guess) {
  userGuess.value = "";
  if (counter == 0) {
    // result.textContent = '!!!Game Over!!!';
    endGame();
    displayMessage(`You Lost !!! the number was ${randomNumber}`);
  }
  guessSlot.innerHTML += `${guess} `;
}

function displayMessage(message) {
  guessRemaining.textContent = counter;
  showUserMessage.textContent = message;
}

function newGame() {
  const newGameButton = document.querySelector("#new-game");
  newGameButton.addEventListener("click", function () {
    randomNumber = randomNumberGenerator();
    previousGuess = [];
    counter = 10;
    displayMessage();
    guessSlot.innerHTML = ``;
    userGuess.removeAttribute("disabled");
    result.removeChild(p);

    playGame = true;
  });
}

function endGame() {
  userGuess.value = "";
  userGuess.setAttribute("disabled", "");

  p.classList.add("button");
  p.innerHTML = `<h2 id="new-game">Start New Game</h2>`;
  result.appendChild(p);
  playGame = false;
  newGame();
}

if (playGame) {
  guessSubmit.addEventListener("click", (e) => {
    e.preventDefault();

    validateGuess(parseInt(userGuess.value));
  });
}
const guessSubmit = document.querySelector(".guessSubmit");
let showUserMessage = document.querySelector(".lowOrHi");
let guessSlot = document.querySelector(".guesses");
let guessRemaining = document.querySelector(".lastResult");
let result = document.querySelector(".resultParas");
let userGuess = document.querySelector(".guessField");
let counter = 10;

let playGame = true;

let previousGuess = [];
const p = document.createElement("p");

function randomNumberGenerator() {
  return Math.ceil(Math.random() * 100) + 1;
}

let randomNumber = randomNumberGenerator();

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert("pleas enter a valid number");
  } else if (guess < 1) {
    alert("pleas enter a valid number");
  } else if (guess > 100) {
    alert("pleas enter a valid number");
  } else {
    // endGame();
    previousGuess.push(guess);
    checkGuess(guess);
  }
}
function checkGuess(guess) {
  if (guess < randomNumber) {
    counter--;
    displayMessage("Your Number is too low");

    displayGuess(guess);
  } else if (guess == randomNumber) {
    displayMessage("Hurrey!!! You won!!!");

    displayGuess(guess);
    endGame();
  } else if (guess > randomNumber) {
    counter--;
    displayMessage("Your Number is too high");

    displayGuess(guess);
  }
}

function displayGuess(guess) {
  userGuess.value = "";
  if (counter == 0) {
    // result.textContent = '!!!Game Over!!!';
    endGame();
    displayMessage(`You Lost !!! the number was ${randomNumber}`);
  }
  guessSlot.innerHTML += `${guess} `;
}

function displayMessage(message) {
  guessRemaining.textContent = counter;
  showUserMessage.textContent = message;
}

function newGame() {
  const newGameButton = document.querySelector("#new-game");
  newGameButton.addEventListener("click", function () {
    randomNumber = randomNumberGenerator();
    previousGuess = [];
    counter = 10;
    displayMessage();
    guessSlot.innerHTML = ``;
    userGuess.removeAttribute("disabled");
    result.removeChild(p);

    playGame = true;
  });
}

function endGame() {
  userGuess.value = "";
  userGuess.setAttribute("disabled", "");

  p.classList.add("button");
  p.innerHTML = `<h2 id="new-game">Start New Game</h2>`;
  result.appendChild(p);
  playGame = false;
  newGame();
}

if (playGame) {
  guessSubmit.addEventListener("click", (e) => {
    e.preventDefault();

    validateGuess(parseInt(userGuess.value));
  });
}
