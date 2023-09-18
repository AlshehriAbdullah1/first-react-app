import logo from "./logo.svg";
import "./App.css";
import MyFirstComponent from "./MyFirstComponent";
import TextButton from "./TextButton";
import MyInput from "./MyInput";
import MyForm from "./MyForm";
import { useState } from "react";
function App() {
  const [count, setCount] = useState(0);

  function handlePlusClick() {
    setCount(count + 1);
    setCount(count + 2);
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>The count is: {count}</h1>
        <button onClick={handlePlusClick}>+</button>
      </header>
    </div>
  );
}

export default App;
