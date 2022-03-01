import { useState, useEffect } from 'react';
import { getMovies } from '../services/fetchMovies';
import '../stylesheets/App.scss';
import HeaderAdalab from './HeaderAdalab';
import List from './List';

function App() {
  const [moviesData, setMoviesData] = useState([]);

  useEffect(() => {
    getMovies()
    .then(data => {
      setMoviesData(data);
    });
  }, []);

  return (
    <div className="App page darkmode">
      <HeaderAdalab />
      <main>
        <h2 className="title--medium mb-1">Lista de películas</h2>
        <List moviesData={moviesData}/>
        <h2 className="title--medium mt-1 mb-1">Añadir película</h2>
        <form action="" className="form">
          <div className="col2 mb-1">
            <label className="form__label" htmlFor="title">
              Título:
            </label>
            <input type="text" placeholder="Ej: Die hard" className="form__input-text" name="title" id="title" />
            <div className="form__error">Error</div>
          </div>
          <div className="col2 mb-1">
            <label htmlFor="synopsis">Sinopsis:</label>
            <textarea placeholder="Érase una vez..." name="synopsis" id="synopsis"></textarea>
            <div className="form__error">Error</div>
          </div>
          <button>Guardar</button>
        </form>
      </main>
    </div>
  );
}

export default App;
