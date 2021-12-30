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

const sectionMenu = document.querySelector('.js-menudropdown');
sectionMenu.classList.remove('collapsed');


// ----- DÍA 2 ------

const listLinks = document.querySelector('.js_datalist');


const bmk_1_url = 'https://books.adalab.es/materiales-del-curso-n/-MdR6Gp68BX20m1pi0z2/modulo-2-programando-la-web/javascript/2_1_intro_a_la_programacion';
const bmk_1_desc = 'JS en los materiales de Adalab';
const bmk_1_seen = 'checked';
const bmk_1_tags_1 = 'JAVASCRIPT';
const bmk_1_tags_2 = 'HTML';

let html = `<li class="data__listitem js__listitem-1">
<article class="data__item">
<p class="item__url">
<a href=${bmk_1_url} target="_blank" rel="noopener noreferrer">
${bmk_1_url.replace('https://', '')}
</a>
</p>
<p class="item__seen">
<input type="checkbox" ${bmk_1_seen} name="item_imp_2" id="item_imp_2">
</p>
<p class="item__desc">${bmk_1_desc}</p>
<ul class="item__tags">
<li class="item__tag">${bmk_1_tags_1.toLowerCase()}</li><li class="item__tag">${bmk_1_tags_2.toLowerCase()}</li>
</ul>
</article>
</li>`;

const bmk_2_url = 'https://thesmartcoder.dev/9-awesome-projects-you-can-build-with-vanilla-javascript/';
const bmk_2_desc = 'Ideas de proyecto JS';
const bmk_2_seen = 'checked';
const bmk_2_tags_1 = 'JAVASCRIPT';
const bmk_2_tags_2 = 'PORTFOLIO';

html += `<li class="data__listitem js__listitem-2">
<article class="data__item">
<p class="item__url">
<a href=${bmk_2_url} target="_blank" rel="noopener noreferrer">
${bmk_2_url.replace('https://', '')}
</a>
</p>
<p class="item__seen">
<input type="checkbox" ${bmk_2_seen} name="item_imp_2" id="item_imp_2">
</p>
<p class="item__desc">${bmk_2_desc}</p>
<ul class="item__tags">
<li class="item__tag">${bmk_2_tags_1.toLowerCase()}</li><li class="item__tag">${bmk_2_tags_2.toLowerCase()}</li>
</ul>
</article>
</li>`;

const bmk_3_url = 'https://books.adalab.es/materiales-del-curso-n/-MdR6Gp68BX20m1pi0z2/modulo-1-html-y-css/1_1_intro_a_la_web';
const bmk_3_desc = 'HTML en los materiales de Adalab';
const bmk_3_seen = '';
const bmk_3_tags_1 = 'HTML';
const bmk_3_tags_2 = 'CSS';

html += `<li class="data__listitem js__listitem-3">
<article class="data__item">
<p class="item__url">
<a href=${bmk_3_url} target="_blank" rel="noopener noreferrer">
${bmk_3_url.replace('https://', '')}
</a>
</p>
<p class="item__seen">
<input type="checkbox" ${bmk_3_seen} name="item_imp_2" id="item_imp_2">
</p>
<p class="item__desc">${bmk_3_desc}</p>
<ul class="item__tags">
<li class="item__tag">${bmk_3_tags_1.toLowerCase()}</li><li class="item__tag">${bmk_3_tags_2.toLowerCase()}</li>
</ul>
</article>
</li>`;

listLinks.innerHTML = html;

// ------ DÍA 3 ------

const input_search_desc = document.querySelector('.js_in_search_desc');
input_search_desc.value = 'materiales';
const descrSearchText = input_search_desc.value;
const list1 = document.querySelector('.js__listitem-1');
const list2 = document.querySelector('.js__listitem-2');
const list3 = document.querySelector('.js__listitem-3');
 if (bmk_1_desc.includes(descrSearchText)) {
   list1.classList.remove('hiddenlist');
 }
  else {
    list1.classList.add('hiddenlist');
  }
  if (bmk_2_desc.includes(descrSearchText)) {
    list2.classList.remove('hiddenlist');
  }
   else {
     list2.classList.add('hiddenlist');
   }
   if (bmk_3_desc.includes(descrSearchText)) {
    list3.classList.remove('hiddenlist');
  }
   else {
     list3.classList.add('hiddenlist');
   }

