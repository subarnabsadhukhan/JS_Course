"use strict";

/////////////////////////////////////////////////
///// code of PROJECT #1: Guess My Number! /////

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 10;
let highScore = 0;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  if (!guess) {
    document.querySelector(".message").textContent = "⛔ No Number!";
  } else if (guess !== secretNumber) {
    if (score > 1) {
      score--;
      document.querySelector(".score").textContent = score;

      document.querySelector(".message").textContent =
        guess > secretNumber ? "📈 Too High!" : "📉 Too Low!";
    } else {
      score--;
      document.querySelector(".score").textContent = 0;
      document.querySelector(".message").textContent =
        "👎🏻 You Lost the Game. Try Again!";
      document.querySelector("body").style.backgroundColor = "#b34747";
      document.querySelector(".number").textContent = secretNumber;
      document.querySelector(".number").style.width = "30rem";
      document.querySelector(".check").disabled = true;
      document.querySelector(".guess").readOnly = true;
      document.querySelector(".check").style.color = "#8f8d8d";
    }
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "🎉 Correct Number!";
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".check").disabled = true;
    document.querySelector(".guess").readOnly = true;
    document.querySelector(".check").style.color = "#8f8d8d";

    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  }
});

document.querySelector(".guess").addEventListener("click", function () {
  if (
    score > 0 &&
    Number(document.querySelector(".guess").value) !== secretNumber
  ) {
    document.querySelector(".guess").value = "";
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 10;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".guess").readOnly = false;
  document.querySelector(".check").disabled = false;
  document.querySelector(".check").style.color = "#222";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
});
