import logo from './logo.svg';
import './App.css';
import Welcome from './components/welcome';
import Multiple from './components/multiinput';
import Compo from './components/compo';
import Image1 from './components/image';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Welcome/>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Multiple name={"Kabilan"} desig={"Software Engineer"}  />
        <Image1/>
        <Compo/>
      </header>
    </div>
  );
}

export default App;
