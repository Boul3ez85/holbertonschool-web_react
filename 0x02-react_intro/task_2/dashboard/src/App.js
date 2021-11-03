import logo from './logo.jpg';
import './App.css';
import './utils.js';
import { getFullYear } from './utils.js';
import { getFooterCopy } from './utils.js';


function App() {
  return (
    <>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="Holberton Logo" />
        <h1>School dashboard</h1>
      </header>
      <main className="App-body">
        <p>Login to access the full dashboard</p>
        <label for="email">Email: </label>
        <input type="email" name="email" id="email" />
        <label for="password">Password: </label>
        <input type="password" name="password" id="password" />
        <button type="button">OK</button>
      </main>
      <footer className="App-footer">
        <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
      </footer>
    </>
    
  );
}

export default App;
