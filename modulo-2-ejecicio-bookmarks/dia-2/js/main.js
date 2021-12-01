"use strict"

/* Dia 1*/
/* 1- Prueba mostrar formulario nuevo bookmark */
/* 2- Prueba mostrar menu */
/* 3- Añadir informacion de los enlaces desde JS
    3.1 Traer el elemento html
    3.2 Variable que contenga toda la información del li por cada uno de los enlaces
    3.3 Añadir esa info con el innerHTML por cada uno de los enlaces
*/

// const section = document.querySelector('.js-data-actions');
// section.classList.remove('hidden');

// const sectionMenu = document.querySelector('.js-menudropdown');
// sectionMenu.classList.remove('collapsed');


// ----- DÍA 2 ------

const listLinks = document.querySelector('.js_datalist');

const url1 = 'https://books.adalab.es/materiales-del-curso-n/-MdR6Gp68BX20m1pi0z2/modulo-2-programando-la-web/javascript/2_1_intro_a_la_programacion';
const desc1 = 'JS en los materiales de Adalab';
const seen1 = 'checked';
const tags1_1 = 'JAVASCRIPT';
const tags1_2 = 'HTML';

let html = `<li class="data__listitem">
<article class="data__item">
<p class="item__url">
<a href=${url1} target="_blank" rel="noopener noreferrer">
${url1.replace('https://', '')}
</a>
</p>
<p class="item__seen">
<input type="checkbox" ${seen1} name="item_imp_2" id="item_imp_2">
</p>
<p class="item__desc">${desc1}</p>
<ul class="item__tags">
<li class="item__tag">${tags1_1.toLowerCase()}</li><li class="item__tag">${tags1_2.toLowerCase()}</li>
</ul>
</article>
</li>`;

const url2 = 'https://thesmartcoder.dev/9-awesome-projects-you-can-build-with-vanilla-javascript/';
const desc2 = 'Ideas de proyecto JS';
const seen2 = 'checked';
const tags2_1 = 'JAVASCRIPT';
const tags2_2 = 'PORTFOLIO';

html += `<li class="data__listitem">
<article class="data__item">
<p class="item__url">
<a href=${url2} target="_blank" rel="noopener noreferrer">
${url2.replace('https://', '')}
</a>
</p>
<p class="item__seen">
<input type="checkbox" ${seen2} name="item_imp_2" id="item_imp_2">
</p>
<p class="item__desc">${desc2}</p>
<ul class="item__tags">
<li class="item__tag">${tags2_1.toLowerCase()}</li><li class="item__tag">${tags2_2.toLowerCase()}</li>
</ul>
</article>
</li>`;

const url3 = 'https://books.adalab.es/materiales-del-curso-n/-MdR6Gp68BX20m1pi0z2/modulo-1-html-y-css/1_1_intro_a_la_web';
const desc3 = 'HTML en los materiales de Adalab';
const seen3 = '';
const tags3_1 = 'HTML';
const tags3_2 = 'CSS';

html += `<li class="data__listitem">
<article class="data__item">
<p class="item__url">
<a href=${url3} target="_blank" rel="noopener noreferrer">
${url3.replace('https://', '')}
</a>
</p>
<p class="item__seen">
<input type="checkbox" ${seen3} name="item_imp_2" id="item_imp_2">
</p>
<p class="item__desc">${desc3}</p>
<ul class="item__tags">
<li class="item__tag">${tags3_1.toLowerCase()}</li><li class="item__tag">${tags3_2.toLowerCase()}</li>
</ul>
</article>
</li>`;

listLinks.innerHTML = html;






