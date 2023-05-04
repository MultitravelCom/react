import logo from './logo.svg';
import './App.css';
import Button from './Button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload TEST!!!!!!!!.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Button
          id={10}
          style="btn_Style_Venta_Per"
          link={123456}
          text="Contactarme"
        />
      </header>
    </div>
  );
}

export default App;
