
'use strict';

let player0Ele = document.querySelector('.player--0'); // To change the active player class
let player1Ele = document.querySelector('.player--1'); // To change the active player class
let score0Ele = document.querySelector('#score--0'); // To change the final score of the player 1
let score1Ele = document.getElementById('score--1'); // To change the final score of player 2

let current0Ele = document.getElementById('current--0'); // To change the current score of player 1
let current1Ele = document.getElementById('current--1'); // To change the current score of player 2

let diceEle = document.querySelector('.dice'); // To roll the dice

let btnRollEle = document.querySelector('.btn--roll'); // Roll dice button
let btnHoldEle = document.querySelector('.btn--hold'); // Hold button
let btnNewEle = document.querySelector('.btn--new'); // New Game button
//* Initial Condition
let scores, activePlayer, currentScore, playing;

let init = function () {
  scores = [0, 0];
  activePlayer = 0;
  currentScore = 0;
  playing = true;

  score0Ele.textContent = 0;
  score1Ele.textContent = 0;
  current0Ele.textContent = 0;
  current1Ele.textContent = 0;

  diceEle.classList.add('hidden');
  player0Ele.classList.remove('player--winner');
  player1Ele.classList.remove('player--winner');
  player0Ele.classList.add('player--active');
  player1Ele.classList.remove('player--active');
};

let switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0; //Making the current score of the active player 0 before switching it
  activePlayer = activePlayer === 0 ? 1 : 0; // If active player is 0 then make it 1 else make it 0
  currentScore = 0; // Reset the current score


  player0Ele.classList.toggle('player--active');
  player1Ele.classList.toggle('player--active');
};

init();

btnRollEle.addEventListener('click', function () {
  if (playing) {
    //TODO: Generate a random number between 1 to 6
    let roll = Math.trunc(Math.random() * 6) + 1;

    //TODO: Display the dice
    diceEle.classList.remove('hidden');

    //!We can access the source of image also
    diceEle.src = `dice-${roll}.png`;

    //TODO: Update the current score if the rolled number is not 1
    if (roll !== 1) {
      currentScore += roll;
      //! We can dynamically handle the class name of the element
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      //TODO: Switch the player
      switchPlayer();
    }
  }
});

btnHoldEle.addEventListener('click', function () {
  if (playing) {
    //TODO : Add current score to active player's score
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    //TODO : To check whether the score >= 100
    if (scores[activePlayer] >= 100) {
      //TODO : Finish the Game
      playing = false;
      doc.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
      document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
      diceEle.classList.add('hidden');
    } else {
      switchPlayer();
    }
  }
});

btnNewEle.addEventListener('click', function () {
  init();
});