// Fichero src/components/App.js
import { useState } from 'react';


const App = () => {
  const [data, setData] = useState([]);
  const [searchSeries, setSearchSeries] = useState('');

  // Llamar al api con useEffect

  useEffect(() => {
    // Dentro de useEffect llamamos al API
    callToApi(searchSeries).then(data => {
      setData(data);
    });
  }, [searchSeries]);

  const handleSearchInput = (ev) => {
    setSearchSeries(ev.currentTarget.value);
  }

  const renderSeries = () => {
    return data.map((series, index) => {
      return <li key={index}>{series.id}</li>;
    });
  };

  return (
    <div>
      <form action='#'>
        <h1>Buscador de series</h1>
        <input type="text" name="search" id="search" onChange={handleSearchInput} value={searchSeries}></input>
        <ul>{renderSeries}</ul>
      </form>
    </div>
  );
};

export default App;