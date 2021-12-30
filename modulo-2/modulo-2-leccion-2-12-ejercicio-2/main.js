'use strict';

// const imgElement1 = document.querySelector('.js_img1');
// const imgElement2 = document.querySelector('.js_img2');
// const imgElement3 = document.querySelector('.js_img3');
// const selectElement = document.querySelector('.js_city__input')


// function handleSelectInput() {
// if (selectElement.value === 'Madrid') {
//     imgElement1.src = 'https://cdn.getyourguide.com/img/location/5ffeb4e1b906c.jpeg/92.jpg';
//     imgElement2.src = 'https://www.avionesenpapel.com/wp-content/uploads/2020/11/que-ver-y-hacer-en-madrid-en-2-dias.jpg';
//     imgElement3.src = 'https://diario.madrid.es/wp-content/uploads/2021/04/listao-750x422.jpg';
// } else if (selectElement.value === 'París') {
//     imgElement1.src = 'https://media.traveler.es/photos/61376b0232d932c80fcb8d00/master/w_1600%2Cc_limit/144336.jpg';
//     imgElement2.src = 'https://media.traveler.es/photos/61377a978f298b3a7a5bdbaa/master/pass/98405.jpg';
//     imgElement3.src = 'https://es.parisinfo.com/var/otcp/sites/images/node_43/node_51/node_232/grands-%C3%A9v%C3%A9nements-juillet-aout-paris-plages-%7C-630x405-%7C-%C2%A9-studio-ttg/19587656-1-fre-FR/Grands-%C3%A9v%C3%A9nements-juillet-aout-Paris-Plages-%7C-630x405-%7C-%C2%A9-Studio-TTG.jpg';
// } else {
//     imgElement1.src = 'https://upload.wikimedia.org/wikipedia/commons/4/47/New_york_times_square-terabass.jpg';
//     imgElement2.src = 'https://www.viajeselcorteingles.es/imagen/es/mic/nueva_york/home/img_mic_nueva_york_home_1600x840_04.jpg';
//     imgElement3.src = 'https://www.turismonuevayork.com/wp-content/uploads/2009/07/3a-1024x762.jpg';
// }
// }

// selectElement.addEventListener('change', handleSelectInput);

const mainElement = document.querySelector('.js_main');
const selectElement = document.querySelector('.js_city__input')

const srcList = [
    'https://cdn.getyourguide.com/img/location/5ffeb4e1b906c.jpeg/92.jpg',
    'https://www.avionesenpapel.com/wp-content/uploads/2020/11/que-ver-y-hacer-en-madrid-en-2-dias.jpg',
    'https://diario.madrid.es/wp-content/uploads/2021/04/listao-750x422.jpg',
    'https://media.traveler.es/photos/61376b0232d932c80fcb8d00/master/w_1600%2Cc_limit/144336.jpg',
    'https://media.traveler.es/photos/61377a978f298b3a7a5bdbaa/master/pass/98405.jpg',
    'https://es.parisinfo.com/var/otcp/sites/images/node_43/node_51/node_232/grands-%C3%A9v%C3%A9nements-juillet-aout-paris-plages-%7C-630x405-%7C-%C2%A9-studio-ttg/19587656-1-fre-FR/Grands-%C3%A9v%C3%A9nements-juillet-aout-Paris-Plages-%7C-630x405-%7C-%C2%A9-Studio-TTG.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/4/47/New_york_times_square-terabass.jpg',
    'https://www.viajeselcorteingles.es/imagen/es/mic/nueva_york/home/img_mic_nueva_york_home_1600x840_04.jpg',
    'https://www.turismonuevayork.com/wp-content/uploads/2009/07/3a-1024x762.jpg'
]

function handleSelectInput () {
    if (selectElement.value === 'Madrid') {
        for (let index = 0; index <= 3; index++) {
            const imgElement = document.createElement('img');
            imgElement.src = srcList[index]; 
            mainElement.appendChild(imgElement);
            imgElement.classList.add('js_image');   
        }
    } else if (selectElement.value === 'París') {
        for (let index = 4; index <= 6; index++) {
            const imgElement = document.createElement('img');
            imgElement.src = srcList[index]; 
            mainElement.appendChild(imgElement);
            imgElement.classList.add('js_image');   
        }
    }
}


selectElement.addEventListener('change', handleSelectInput);



