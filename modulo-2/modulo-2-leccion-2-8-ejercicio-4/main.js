'use strict';

const main = document.querySelector('.js_main');

const tasks = [
  { name: 'Recoger setas en el campo', completed: true },
  { name: 'Comprar pilas', completed: true },
  { name: 'Poner una lavadora de blancos', completed: true },
  { name: 'Aprender cómo se realizan las peticiones al servidor en JavaScript',
    completed: false
  }
];

for (const dataItem of tasks) {
  console.log(dataItem);
  if (dataItem.completed) {
    main.innerHTML += `<li class="completed">${dataItem.name}<input class="js_input" type="checkbox" id="${dataItem}" checked></li>`;
  } else {
    main.innerHTML += `<li>${dataItem.name}    <input class="js_input" type="checkbox" id="${dataItem}"></li>`;
  }
  
  /*const inputItem = document.querySelector(".js_input");

  if (inputItem.checked) {
    dataItem.completed.classList.add('completed');
  }*/
}

const inputList = document.querySelectorAll('.js_input');

for( const input of inputList ) {
  input.addEventListener('click',handleClick);
}

function handleClick(event) {
  console.log(event.currentTarget);
}