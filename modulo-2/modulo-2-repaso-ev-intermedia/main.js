'use strict';

//1. Variables globales: querySelector y datos de toda la páǵina.

const updateBtn = document.querySelector('.js_button');


//2. Funciones

function renderFace() {};

function changeBackground() {};

function handleClickUpdate() {
    renderFace();
    changeBackground();
};


//3. Código global (código que se ejecuta cuando se carga la página: listeners)

updateBtn.addEventListener('click', handleClickUpdate());