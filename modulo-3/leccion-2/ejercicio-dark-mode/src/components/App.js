import { useState } from "react";
import "../styles/App.css";

function App() {
  const [mode, setMode] = useState('');

  const handleClickBtn = (ev) => {
    ev.preventDefault();
    if(ev.currentTarget.value === '') {
    setMode('dark');
  } else {
    setMode(null);
  }
  };

  const renderDarkModeText = () => {
    if(mode === 'dark') {
      return <p>Tienes activado el dark mode</p>;
    } else {
      return null;
    }
  }
  
  return (
    <div className={mode}>
      <button onClick={handleClickBtn} value={mode}>Desactivar el dark mode</button>
      {renderDarkModeText()}
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae
        nesciunt non ipsum accusamus dicta perspiciatis dolore voluptates?
        Incidunt eius maxime aliquid architecto, eveniet totam deleniti? Optio
        veritatis quia nulla iusto.
      </p>
    </div>
  );
}

export default App;
