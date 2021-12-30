'use strict';

//función
function getRandomDog() {

    //pedir la lista de razas
    fetch('https://dog.ceo/api/breeds/list/all')
    .then(response => response.json())
    .then(breedsData=> {
        console.log(breedsData);
        const breeds = breedsData.message;
        //const breeds = Object.keys(breedsData.message); //Esto hace que solo se quede con los nombres del objeto
        console.log(breeds);

        //tomar una raza aleatoria, muestra un mensaje que diga la raza
        return fetch('https://api.rand.fun/number/integer?max=94')
        .then(numberResponse => numberResponse.json())
        .then (numberData => {
            const randomNumber = numberData.result;
            const dogBreed = breeds[randomNumber];
            console.log(dogBreed);

            //proxima petición (cuando obtengo la respuesta del número aleatorio)
            
        })



    })

    
    

    //pintar la imagen de esa raza aleatoria

}


document.addEventListener('click', getRandomDog);