import logo from "./logo.svg";
import "./App.css";
import MyFirstComponent from "./MyFirstComponent";
import TextButton from "./TextButton";
import MyInput from "./MyInput";
import MyForm from "./MyForm";
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

        <TextButton />
        {/* <MyInput /> */}
        <MyForm />
      </header>
    </div>
  );
}

export default App;
