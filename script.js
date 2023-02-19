'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector(`.message`).textContent = message;
};

document.querySelector(`.check`).addEventListener(`click`, function () {
  const guess = Number(document.querySelector(`.guess`).value);

  // when the input is incorrect
  if (!guess) {
    displayMessage(`⛔ No number`);

    // when player wins
  } else if (guess === secretNumber) {
    displayMessage(`🎉 Correct Number!`);
    document.querySelector(`.number`).textContent = secretNumber;
    document.querySelector(
      `body`
    ).style.backgroundImage = `radial-gradient(#b9f3e4, #ff5f9e)`;
    document.querySelector(`.number`).style.width = `30rem`;

    if (score > highscore) {
      highscore = score;
      document.querySelector(`.highscore`).textContent = highscore;
    }
    //when the guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too high!' : `📉 Too low!`);
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('💥 You lost the game!');
      document.querySelector(
        `body`
      ).style.backgroundImage = `radial-gradient(black, white)`;
      document.querySelector('.score').textContent = 0;
    }
  }
});

// again button
document.querySelector(`.again`).addEventListener(`click`, function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage(`Start guessing...`);
  document.querySelector(`.score`).textContent = score;
  document.querySelector(`.number`).textContent = `?`;
  document.querySelector(`.guess`).value = ``;
  document.querySelector(
    `body`
  ).style.backgroundImage = `linear-gradient(to left, #ff5f9e, #b9f3e4)`;
  document.querySelector(`.number`).style.width = `15rem`;
});
