"use strict";
let secretNumber;
let score = 10;
let highScore = 0;
const titleTag = document.querySelector("h1");
const messageTag = document.querySelector(".message");
const numberTag = document.querySelector(".number");
const scoreTag = document.querySelector(".score");
const highScoreTag = document.querySelector(".highscore");
const inputTag = document.querySelector(".guess");
const body = document.querySelector("body");
const pTag = document.querySelector(".between");
const mainTag = document.querySelectorAll(".main");

const displayMessage = (message) => (messageTag.textContent = message);
const setStyle = (bgColor, width) => {
  body.style.backgroundColor = bgColor;
  numberTag.style.width = width;
};
const updateScore = () => (scoreTag.textContent = score);

const initGame = () => {
  secretNumber = Math.floor(Math.random() * 30) + 1;
  displayMessage("စပြီး ခန့်မှန်းပါပြီ။ ...");
  inputTag.value = "";
  inputTag.disabled = false;
  numberTag.textContent = "?";
  updateScore();
  setStyle("#222", "15rem"); // Reset background and width
};

const checkGuess = () => {
  const guess = Number(inputTag.value);

  if (!guess) {
    displayMessage("⛔️ ဂဏန်းတစ်ခုခု အရင်ရေးပါ။!");
    return;
  }

  if (guess === secretNumber) {
    // Correct guess
    displayMessage("🎉 မှန်သွားပါပြီ။!");
    numberTag.textContent = secretNumber;
    setStyle("#60b347", "150rem"); // Change background color to green (#60b347)
    if (score > highScore) highScoreTag.textContent = highScore = score;
    messageTag.style.color = "#60b347";
    inputTag.disabled = true;
    titleTag.textContent = " မှန်သွားပါပြီ။ ";
    pTag.style.display = "none";
    titleTag.style.color = "green";
  } else {
    displayMessage(
      guess < secretNumber ? "📉 နည်းသွားတယ်နော်၊" : "📈 များနေတယ်နော်!"
    );
    messageTag.style.color = "red";
    score--;
    updateScore();
    if (score <= 0) {
      displayMessage("💥 ရှုံးသွားပါပြီ။");
      numberTag.style.backgroundColor = "red";
      numberTag.textContent = "❌";
      inputTag.disabled = true;
      titleTag.textContent = "နောက်တစ်ကြိမ်ပြန်ကြိုးစားပါ။";
      titleTag.style.color = "yellow";
      pTag.style.display = "none";
      document.querySelector(".check").style.disabled = true;
      score = 0;
      updateScore();
    }
  }
};

document.querySelector(".check").addEventListener("click", checkGuess);
document.querySelector(".again").addEventListener("click", initGame);

// Initialize the game on page load
initGame();
