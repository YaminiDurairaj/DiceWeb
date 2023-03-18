var dice1Img = document.querySelector(".img1");
var dice2Img = document.querySelector(".img2");

function diceContainer(diceImg) {
  var randomNumber = Math.random();
  randomNumber = Math.floor(randomNumber * 6) + 1;
  if (randomNumber === 1) {
    diceImg.setAttribute("src", "images/dice1.png");
  } else if (randomNumber === 2) {
    diceImg.setAttribute("src", "images/dice2.png");
  } else if (randomNumber === 3) {
    diceImg.setAttribute("src", "images/dice3.png");
  } else if (randomNumber === 4) {
    diceImg.setAttribute("src", "images/dice4.png");
  } else if (randomNumber === 5) {
    diceImg.setAttribute("src", "images/dice5.png");
  } else {
    diceImg.setAttribute("src", "images/dice6.png");
  }
  return randomNumber;
}

function winner(val1, val2) {
  if (val1 > val2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins";
  } else if (val1 < val2) {
    document.querySelector("h1").innerHTML = "Player 2 Wins";
  } else {
    document.querySelector("h1").innerHTML = "Draw";
  }
}

winner(diceContainer(dice1Img), diceContainer(dice2Img));
