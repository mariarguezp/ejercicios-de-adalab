"use strict";

// post new user

document
  .querySelector(".js-btn-header-params")
  .addEventListener("click", () => {
    fetch("http://localhost:3000/user", {
      method: "POST", // o GET, PUT, PATCH...
      headers: {
        unParametroEnLaCabecera: JSON.stringify({
          name: "María",
          name: "Juani",
        }),
        "otro-parametro-de-la-cabecera": 24,
        otroParametroMas: undefined,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  });
