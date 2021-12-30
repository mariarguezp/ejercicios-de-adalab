'use strict';

const numbers = [1, 2, 3];

for (let index = 0; index < numbers.length; index++) {
    const firstNewItem = document.createElement('li');
    const newContent = document.createTextNode(numbers[index]);
    firstNewItem.appendChild(newContent);

    const listElement = document.querySelector('.js_list');
    listElement.appendChild(firstNewItem); 
}