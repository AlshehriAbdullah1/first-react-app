import logo from "./logo.svg";
import "./App.css";
import MyFirstComponent from "./MyFirstComponent";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to refresh.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <h1> My Name is Abdullah! </h1>
        <MyFirstComponent />
      </header>
    </div>
  );
}

export default App;