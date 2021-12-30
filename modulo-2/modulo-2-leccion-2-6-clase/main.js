'use strict';

//traer elementos de js

const inputId = document.querySelector('.js_id');
const inputNombre = document.querySelector('.js_name');
const inputSector = document.querySelector('.js_business');
const inputContact = document.querySelector('.js_contact');
const table = document.querySelector('.js_table');
const button = document.querySelector('.js_button');

//funciones
function addClient(event) {
    event.preventDefault(); //para evitar el comportamiento por defecto del formulario y que siga el que le estamos ordenando
    console.log('Función Añadir cliente');
    //Obtener los valores del cliente === value del input
    const id = inputId.value;
    const nombre = inputNombre.value;
    const sector = inputSector.value;
    const contact = inputContact.value;

}

function pintarHTML(id, nombre, sector, contact) {
    //Agregar esos valores al html === tabla
    table.innerHTML += `<tr>
    <td>${id}</td>
    <td>${nombre}</td>
    <td>${sector}</td>
    <td>${contact}</td>
  </tr>`;
}

function handleClickButtonSave(event) {
    event.preventDefault();
    addClient();
}


//Operaciones
// button.addEventListener('click', addClient);
button.addEventListener('click', handleClickButtonSave);