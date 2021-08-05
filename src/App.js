// Importa logo de react
import logo from './logo.svg';
// Importar el archivod de estilos
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Mi primer página web con React.js
        </p>
        <a href="https://es.reactjs.org/docs/getting-started.html">
          Iniciando con React
        </a>
      </header>
      <main>
        <section>
          <h1>Hola mundo</h1>
          lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
          lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
          lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
          lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
          lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
          lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
          lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        </section>
      </main>
    </div>
  );
}

export default App;
