"use strict";

let secretNumber,
  score,
  highScore = 0;
const messageTag = document.querySelector(".message");
const numberTag = document.querySelector(".number");
const scoreTag = document.querySelector(".score");
const highScoreTag = document.querySelector(".highscore");
const inputTag = document.querySelector(".guess");
const body = document.querySelector("body");

const displayMessage = (message) => (messageTag.textContent = message);
const setStyle = (bgColor, width) => {
  body.style.backgroundColor = bgColor;
  numberTag.style.width = width;
};
const updateScore = () => (scoreTag.textContent = score);

const initGame = () => {
  score = 10;
  secretNumber = Math.floor(Math.random() * 10) + 1;
  displayMessage("Start guessing...");
  inputTag.value = "";
  inputTag.disabled = false;
  numberTag.textContent = "?";
  updateScore();
  setStyle("#222", "15rem"); // Reset background and width
};

const checkGuess = () => {
  const guess = Number(inputTag.value);

  if (!guess) {
    displayMessage("⛔️ No number entered!");
    return;
  }

  if (guess === secretNumber) {
    // Correct guess
    displayMessage("🎉 Correct Number!");
    numberTag.textContent = secretNumber;
    setStyle("#60b347", "30rem"); // Change background color to green (#60b347)
    if (score > highScore) highScoreTag.textContent = highScore = score;
    inputTag.disabled = true;
  } else {
    displayMessage(guess < secretNumber ? "📉 Too low!" : "📈 Too high!");
    score--;
    updateScore();
    if (score <= 0) displayMessage("💥 You lost the game!");
  }
};

document.querySelector(".check").addEventListener("click", checkGuess);
document.querySelector(".again").addEventListener("click", initGame);

// Initialize the game on page load
initGame();
