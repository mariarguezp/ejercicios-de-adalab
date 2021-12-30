'use strict';

const adalabersData = [
    {
        name: 'María',
        age: 29,
        job: 'diseñadora'
    },
    {
        name: 'Lucía',
        age: 31,
        job: 'ingeniera química'
    },
    {
        name: 'Susana',
        age: 34,
        job: 'periodista'
    },
    {
        name: 'Rocío',
        age: 25,
        job: 'actriz'
    },
    {
        name: 'Inmaculada',
        age: 21,
        job: 'diseñadora'
    }
]

function countAdalabers() {
    const adalabersQuantity = adalabersData.length;
    console.log(`Hay ${adalabersQuantity} adalabers en el listado.`);
}

function averageAge() {
    let sum = 0;
    let result;

    for (let i = 0; i < adalabersData.length; i++) {
        sum += adalabersData[i].age;
    }

    result = sum / adalabersData.length;
    console.log(`La media de edad de las adalabers es ${result}`);
}

function theYoungest() {
    let ageBase = adalabersData[0].age
    for (let i = 0; i < adalabersData.length; i++) {
        if (adalabersData[i].age < ageBase) {
            console.log(`La adalaber más joven es ${adalabersData[i].name}.`);
        }        
    }
}

function countDesigners() {
    let designers = 0;
    for (let i = 0; i < adalabersData.length; i++) {
        if (adalabersData[i].job === 'diseñadora') {
            designers += 1;
        }
    }

    console.log(`${designers} adalabers son diseñadoras.`);
}

countAdalabers();
averageAge();
theYoungest();
countDesigners();