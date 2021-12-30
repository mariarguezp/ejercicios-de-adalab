'use strict';

const inputEl1 = document.querySelector('.js_movie_1');
const inputEl2 = document.querySelector('.js_movie_2');
const btnEl = document.querySelector('.js_btn')

function handleClickSend(event) {
    event.preventDefault();

    const firstMovie = inputEl1.value;
    const secondMovie = inputEl2.value;
    const movieList = [
        firstMovie,
        secondMovie
    ]

    for (const movie of movieList) {
        console.log(`¡A mí también me encantó ${movie}! Tenemos mucho en común, humana.`)
        
    }
}

btnEl.addEventListener('click', handleClickSend);
