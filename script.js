"use strict";

////////////////////////////
///// PROJECT #3: Pig Game

// Selecting Elements
const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");
const score0El = document.querySelector("#score--0");
const score1El = document.getElementById("score--1");
const current0El = document.getElementById("current--0");
const current1El = document.getElementById("current--1");
const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnHold = document.querySelector(".btn--hold");
const btnRoll = document.querySelector(".btn--roll");

// Starting Condition
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add("hidden");

let currentScore = 0;
let activePlayer = 0;
const scores = [0, 0];
let isPlaying = true;

const switchPlayer = function () {
  currentScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle("player--active");
  player1El.classList.toggle("player--active");
};

// Rolling Dice Functionality
btnRoll.addEventListener("click", function () {
  if (isPlaying) {
    // 1. Generating a Random Dice Roll
    const dice = Math.trunc(Math.random() * 6) + 1;

    // 2. Display Dice
    diceEl.classList.remove("hidden");
    diceEl.src = `assets/images/dice-${dice}.png`;

    // 3. Check for rolled 1:
    if (dice !== 1) {
      // add Dice No. to Current Score
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      // switch to next player
      switchPlayer();
    }

    /*
    if (player0El.classList.contains("player--active")) {
      console.log(`true`);
      player0El.classList.remove("player--active");
      player1El.classList.add("player--active");
    } else {
      player1El.classList.remove("player--active");
      player0El.classList.add("player--active");
    }
    */
  }
});

btnHold.addEventListener("click", function () {
  if (isPlaying) {
    /*
    activePlayer === 0
    ? (scores[0] += currentScore)
    : (scores[1] += currentScore);
    
    score0El.textContent = scores[0];
    score1El.textContent = scores[1];
    */

    // Add current score to active player score
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    // Check if player's score is >= 100
    if (scores[activePlayer] >= 100) {
      // Finish the Game
      isPlaying = false;
      diceEl.classList.add("hidden");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("player--active");
    } else {
      // Switch to the Next Player
      switchPlayer();
    }
  }
});

btnNew.addEventListener("click", function () {
  activePlayer = 0;
  currentScore = 0;
  isPlaying = true;
  player0El.classList.add("player--active");
  player0El.classList.remove("player--winner");
  player1El.classList.remove("player--winner");
  scores[0] = 0;
  scores[1] = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;
  score0El.textContent = 0;
  score1El.textContent = 0;
});
