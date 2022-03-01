import "../stylesheets/App.scss";

function App() {
  function handleFetch() {
    fetch("http//localhost:3001/users?name=Norma", { method: "GET" })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  }

  return (
    <div className="App">
      <header>
        <h1>Probando nuestro servidor</h1>
        <button onClick={handleFetch}>Fetch me</button>
      </header>
      <main></main>
    </div>
  );
}

export default App;
