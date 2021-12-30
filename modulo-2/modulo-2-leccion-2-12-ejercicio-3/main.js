'use strict';

const firstNameInput = document.querySelector('.js_firstName');
const lastNameInput = document.querySelector('.js_lastName');
const phoneInput = document.querySelector('.js_phone');
const firstNameSelect = document.querySelector('.js_select');


const names = [
    {firstname: 'María',
    lastname: 'Rodríguez',
    phone: '657931276',
    },
    {firstname: 'Ico',
    lastname: 'Prieto',
    phone: '655223698',
    },
    {firstname: 'Antonia',
    lastname: 'Guerrero',
    phone: '698554132',
    }
]

for (const selectOptions of names) {
    const namesOption = document.createElement('option');
    const selectedName = document.createTextNode(selectOptions.firstname);
    namesOption.appendChild(selectedName);
    namesOption.setAttribute('value', selectOptions.firstname);
    firstNameSelect.appendChild(namesOption);
}


function handleSelect() {
if (firstNameSelect.value === 'María') {
    firstNameInput.value = names[0].firstname;
    lastNameInput.value = names[0].lastname;
    phoneInput.value = names[0].phone;
}
}

firstNameSelect.addEventListener('change', handleSelect);


