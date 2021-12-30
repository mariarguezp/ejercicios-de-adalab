'use strict';

// // avatar por defecto
// const DEFAULT_AVATAR = 'http://placehold.it/300x300';
// // avatar que eligió el usuario al registrarse
// let userAvatar = 'http://www.fillmurray.com/300/300';

// const imgElement = document.querySelector('.js-user__avatar');
// imgElement.src = userAvatar;

// let userAvatar = '';
// imgElement.src = userAvatar;

// imgElement.src = userAvatar || DEFAULT_AVATAR;



// // avatar por defecto
// const DEFAULT_AVATAR = 'http://placehold.it/300x300';
// // avatar que eligió el usuario al registrarse
// let userAvatar = 'http://www.fillmurray.com/300/300';

// userAvatar = '';

// const imgElement = document.querySelector('.js_user_avatar');
// imgElement.src = userAvatar;

// if (userAvatar === '') {
//     imgElement.src = DEFAULT_AVATAR;
// } else {
//     imgElement.src = userAvatar;
// }


// avatar por defecto
const DEFAULT_AVATAR = 'http://placehold.it/300x300';
// avatar que eligió el usuario al registrarse
let userAvatar = 'http://www.fillmurray.com/300/300';

userAvatar = ''; 

const imgElement = document.querySelector('.js_user_avatar');

imgElement.src = userAvatar || DEFAULT_AVATAR;