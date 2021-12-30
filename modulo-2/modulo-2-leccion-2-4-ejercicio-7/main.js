"use strict";

function getEl(element) {
  const newElement = document.querySelector(element);

  if (newElement === null) {
    console.error(
      `No existe ningún elemento con clase, id o tag llamado ${element}`
    );
  }

  return newElement;
}

function number(a) {
  if (a % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

const numberElement = getEl('.number');

const numberContent = parseInt(numberElement.innerHTML);

//Otra forma de escribir lo anterior:
// const numberElement = getEl('.number').innerHTML;
// const numberContent = parseInt(numberElement);

if (number(numberContent) === true) {
    console.log(`Este número es PAR`);
} else {
    console.log(`Este número es IMPAR`);
}
