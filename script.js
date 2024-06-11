// script.js
const paddle = document.getElementById('paddle');
const ball = document.getElementById('ball');
const gameContainer = document.querySelector('.game-container');

let paddleX = 250;
let ballX = Math.random() * 580;
let ballY = 0;
let ballSpeed = 2; // Set a slightly slower constant speed
let score = 0;

document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowLeft' && paddleX > 0) {
    paddleX -= 20;
  } else if (event.key === 'ArrowRight' && paddleX < 500) {
    paddleX += 20;
  }
  paddle.style.left = `${paddleX}px`;
});

function moveBall() {
  ballY += ballSpeed;
  if (ballY > 360 && ballY < 380) {
    if (ballX >= paddleX && ballX <= paddleX + 100) {
      score++;
      ballY = 360; // Ball stops at the paddle position
      ball.style.backgroundColor = 'green'; // Change ball color on hit
      setTimeout(() => {
        ballY = 0;
        ballX = Math.random() * 580;
        ball.style.backgroundColor = 'red'; // Reset ball color
      }, 200); // Delay before the ball resets
    }
  } else if (ballY > 380) {
    alert(`Game Over! Your score: ${score}`);
    resetGame();
  }

  ball.style.top = `${ballY}px`;
  ball.style.left = `${ballX}px`;
  requestAnimationFrame(moveBall);
}

function resetGame() {
  ballY = 0;
  score = 0;
  ballX = Math.random() * 580;
}

moveBall();
