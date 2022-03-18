const squares = document.querySelectorAll(".square");
const circleWin = document.querySelector(".circle-win");
const crossWin = document.querySelector(".cross-win");
const startButton = document.querySelector(".start");
const resetButton = document.querySelector(".reset");
const square1 = document.querySelector('[data-square="1"]');
const square2 = document.querySelector('[data-square="2"]');
const square3 = document.querySelector('[data-square="3"]');
const square4 = document.querySelector('[data-square="4"]');
const square5 = document.querySelector('[data-square="5"]');
const square6 = document.querySelector('[data-square="6"]');
const square7 = document.querySelector('[data-square="7"]');
const square8 = document.querySelector('[data-square="8"]');
const square9 = document.querySelector('[data-square="9"]');
let isCircle = true;
let gameStarted = false;

function showSign() {
  if (!gameStarted) return;
  let cross = this.firstElementChild;
  let circle = this.lastElementChild;

  if (isCircle) {
    circle.classList.remove("invisible");
    this.dataset.sign = "circle";

    isCircle = false;
  } else {
    cross.classList.remove("invisible");
    this.dataset.sign = "cross";

    isCircle = true;
  }
  this.removeEventListener("click", showSign);

  circleWins();
  crossWins();
  endGame();
}

function circleWins() {
  if (
    (square1.dataset.sign === "circle" &&
      square2.dataset.sign === "circle" &&
      square3.dataset.sign === "circle") ||
    (square4.dataset.sign === "circle" &&
      square5.dataset.sign === "circle" &&
      square6.dataset.sign === "circle") ||
    (square7.dataset.sign === "circle" &&
      square8.dataset.sign === "circle" &&
      square9.dataset.sign === "circle") ||
    (square1.dataset.sign === "circle" &&
      square4.dataset.sign === "circle" &&
      square7.dataset.sign === "circle") ||
    (square2.dataset.sign === "circle" &&
      square5.dataset.sign === "circle" &&
      square8.dataset.sign === "circle") ||
    (square3.dataset.sign === "circle" &&
      square6.dataset.sign === "circle" &&
      square9.dataset.sign === "circle") ||
    (square1.dataset.sign === "circle" &&
      square5.dataset.sign === "circle" &&
      square9.dataset.sign === "circle") ||
    (square3.dataset.sign === "circle" &&
      square5.dataset.sign === "circle" &&
      square7.dataset.sign === "circle")
  ) {
    circleWin.classList.remove("invisible");
  }
}

function crossWins() {
  if (
    (square1.dataset.sign === "cross" &&
      square2.dataset.sign === "cross" &&
      square3.dataset.sign === "cross") ||
    (square4.dataset.sign === "cross" &&
      square5.dataset.sign === "cross" &&
      square6.dataset.sign === "cross") ||
    (square7.dataset.sign === "cross" &&
      square8.dataset.sign === "cross" &&
      square9.dataset.sign === "cross") ||
    (square1.dataset.sign === "cross" &&
      square4.dataset.sign === "cross" &&
      square7.dataset.sign === "cross") ||
    (square2.dataset.sign === "cross" &&
      square5.dataset.sign === "cross" &&
      square8.dataset.sign === "cross") ||
    (square3.dataset.sign === "cross" &&
      square6.dataset.sign === "cross" &&
      square9.dataset.sign === "cross") ||
    (square1.dataset.sign === "cross" &&
      square5.dataset.sign === "cross" &&
      square9.dataset.sign === "cross") ||
    (square3.dataset.sign === "cross" &&
      square5.dataset.sign === "cross" &&
      square7.dataset.sign === "cross")
  ) {
    crossWin.classList.remove("invisible");
  }
}

function endGame() {
  if (
    !crossWin.classList.contains("invisible") ||
    !circleWin.classList.contains("invisible")
  ) {
    gameStarted = false;
  }
}

function startGame() {
  if (gameStarted) {
    return;
  }
  startButton.setAttribute("disabled", true);
  gameStarted = true;
}

function resetGame() {
  gameStarted = false;
  isCircle = true;
  startButton.removeAttribute("disabled");
  circleWin.classList.add("invisible");
  crossWin.classList.add("invisible");
  squares.forEach((square) => {
    let cross = square.lastElementChild;
    let circle = square.firstElementChild;

    square.setAttribute("data-sign", "");
    cross.classList.add("invisible");
    circle.classList.add("invisible");

    square.addEventListener("click", showSign);
  });
}

squares.forEach((square) => {
  square.addEventListener("click", showSign);
});

startButton.addEventListener("click", startGame);

resetButton.addEventListener("click", resetGame);
