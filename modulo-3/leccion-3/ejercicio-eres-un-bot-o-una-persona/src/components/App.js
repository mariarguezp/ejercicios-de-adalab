import { useState } from 'react';

function App() {
  //1a opcion: creamos una variable estado para cada ingrediente y comprobamos si está checkado o no
  // const [macarrones, setMacarrones] = useState(false);

  //2a opción: creamos una variable estado que sea un array y sirva para todos los ingredientes
  const [ingredientsList, setIngredientsList] = useState([]);

  const handleChangeInput = (ev) => {
    const checked = ev.currentTarget.checked;
    const value = ev.currentTarget.value;

    if (checked) { 
    /*(checked) es lo mismo que poner (checked === true)*/
      //Tengo que añadir el ingrediente que me viene en value a la variable estado
      setIngredientsList([...ingredientsList, value]);
    } else {
      //Quitar el ingrediente de la variable estado
      //Usando filter cojo todos los ingredientes excepto los que sean distintos de value
      setIngredientsList(ingredientsList.filter((eachIngredient) => eachIngredient !== value));
    }
  };

  return (
    <div>
      <h1>Selecciona los ingredientes de la tortilla de patatas</h1>
      <form action="#">
    <label htmlFor="ing-macarrones">Macarrones</label>
    <input type="checkbox" name="ingredient" id="ing-macarrones" value="macarrones" onChange={handleChangeInput}></input>
    <label htmlFor="ing-patatas">Patatas</label>
    <input type="checkbox" name="ingredient" id="ing-patatas" value="patatas" onChange={handleChangeInput}></input>
    <label htmlFor="ing-nueces">Nueces</label>
    <input type="checkbox" name="ingredient" id="ing-nueces" value="nueces" onChange={handleChangeInput}></input>
    <label htmlFor="ing-huevos">Huevos</label>
    <input type="checkbox" name="ingredient" id="ing-huevos" value="huevos" onChange={handleChangeInput}></input>
    <label htmlFor="ing-cebolla">Cebolla</label>
    <input type="checkbox" name="ingredient" id="ing-cebolla" value="cebolla" onChange={handleChangeInput}></input>
    <label htmlFor="ing-cerveza">Cerveza</label>
    <input type="checkbox" name="ingredient" id="ing-cerveza" value="cerveza" onChange={handleChangeInput}></input>
    <button>Marcar todos</button>
    <button>Desmarcar todos</button>
</form>
    <p>{ingredientsList.includes('patatas') && ingredientsList.includes('huevos') && ingredientsList.includes('cebolla') && !ingredientsList.includes('cerveza') && !ingredientsList.includes('macarrones') && !ingredientsList.includes('nueces') ? 'Eres una persona concebollista' : 'Eres un robot sin paladar'}</p>
    </div>
  );
}

export default App;
