import "./App.css";
import { useState } from "react";
const App = () => {
  // const name = "John";
  const [count, setCount] = useState(0);

  function addCount() {
    setCount(count + 1);
  }
  function removeCount() {
    setCount(count - 1);
  }
  return (
    <div className="App">
      <button onClick={removeCount}>-</button>
      <h1>{count}</h1>
      <button onClick={addCount}>+</button>
    </div>
  );
};

export default App;
