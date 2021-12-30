'use strict';

const searchInputElement = document.querySelector('.js_searchInput');
const searchBtnElement = document.querySelector('.js_searchBtn');


function handleClickSearch(event) {
    event.preventDefault();
    
}


searchBtnElement.addEventListener('click', handleClickSearch);