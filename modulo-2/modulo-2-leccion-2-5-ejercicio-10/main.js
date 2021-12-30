"use strict";

const inception = "Inception";
const theButterFlyEffect = "The butterfly effect";
const eternalSunshineOfTheSM = "Eternal sunshine of the spotless mind";
const blueVelvet = "Blue velvet";
const split = "Split";

const listEl = document.querySelector(".js_list");
const btnEl = document.querySelector(".js_btn");

function handleClickShowList() {
  listEl.innerHTML = `<li class = "item_1">${inception}</li><li class = "item_2">${theButterFlyEffect}</li><li class = "item_3">${eternalSunshineOfTheSM}</li><li class = "item_4">${blueVelvet}</li><li class = "item_5">${split}</li>`;

  const listItem1 = document.querySelector(".item_1");
  const listItem2 = document.querySelector(".item_2");
  const listItem3 = document.querySelector(".item_3");
  const listItem4 = document.querySelector(".item_4");
  const listItem5 = document.querySelector(".item_5");

  function handleClickLogFilm(event) {
    console.log(event.currentTarget.innerHTML);
  }

  listItem1.addEventListener("click", handleClickLogFilm);
  listItem2.addEventListener("click", handleClickLogFilm);
  listItem3.addEventListener("click", handleClickLogFilm);
  listItem4.addEventListener("click", handleClickLogFilm);
  listItem5.addEventListener("click", handleClickLogFilm);
}

btnEl.addEventListener("click", handleClickShowList);


