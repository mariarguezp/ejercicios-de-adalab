import { useState } from 'react';

function App() {
  const [value, setValue] = useState(0);

  function handleValueA(ev) {
    ev.preventDefault();
    setValue(moreValue);
  }

  const moreValue = value + 1;

  function handleValueB(ev) {
    ev.preventDefault();
    setValue(lessValue);
  }

  const lessValue = value - 1;

  function handleValueC(ev) {
    ev.preventDefault();
    const resetValue = 0;
    setValue(resetValue);
  }

  return (
    <div>
      <h1>Contador: {value}</h1>
      <button onClick={handleValueA}>Suma</button>
      <button onClick={handleValueB}>Resta</button>
      <button onClick={handleValueC}>Reset</button>
    </div>
  );
}

export default App;
