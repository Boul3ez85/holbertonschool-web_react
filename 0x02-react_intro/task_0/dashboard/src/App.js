import logo from './logo.jpg';
import './App.css';

function App() {
  return (
    <>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="Holberton Logo" />
        <h1>School dashboard</h1>
      </header>
      <main className="App-body">
        <p>Login to access the full dashboard</p>
      </main>
      <footer className="App-footer">
        <p>Copyright 2020 - holberton School</p>
      </footer>
    </>
    
  );
}

export default App;
