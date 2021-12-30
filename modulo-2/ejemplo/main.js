"use strict";
const playerNumber = document.querySelector(".js-player-number");
const button = document.querySelector(".js-button");
const clue = document.querySelector(".js-clue");
const attempsNumber = document.querySelector(".js-attemps-number");

///Funciones////
function handleButton() {
  let playerValue = parseInt(playerNumber.value);
  console.log(playerValue);
  if (playerValue === randomNumber) {
    clue.value = "¡Has ganado campeona!";
  } else if (playerValue < randomNumber) {
    clue.value = "Demasiado bajo";
  } else if (playerValue > randomNumber) {
    clue.value = "Demasiado alto";
  } else if (playerValue < 1) {
    clue.value = "El número debe estar entre 1 y 100";
  } else if (playerValue > 100) {
    clue.value = "El número debe estar entre 1 y 100";
  }
  incrementClick();
}
let countClick = 0;

function incrementClick() {
  countClick++;
  updateDisplay(countClick);
}
function updateDisplay(val) {
  attempsNumber.value = val;
}

button.addEventListener("click", handleButton);
function getRandomNumber(max) {
  return Math.ceil(Math.random() * 100);
}
let randomNumber = getRandomNumber();
console.log(randomNumber);