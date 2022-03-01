// Fichero src/components/App.js
import { useState } from 'react';

const App = () => {
  const [text, setText] = useState('');

  const handleChangeText = (ev) => {
    setText(ev.currentTarget.value.replace(/[aeouAEOU]/g, 'i'));
  };
  
  const handleSubmit = (ev) => {
    ev.preventDefault();
  };

  return (
    <form action="#" onSubmit={handleSubmit}>
      <h1>Traductor MIMIMI</h1>
      <p>{text}</p>
      <input type="text" name="text" id="text" onChange={handleChangeText}></input>
    </form>
  );
};

export default App;