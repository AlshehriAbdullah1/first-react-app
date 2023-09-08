import { useState } from "react";

function TextButton() {
  let [name, setName] = useState("Abdullah");

  function changeName() {
    if (name == "Abdullah") {
      setName("Ahmad");
    } else {
      setName("Abdullah");
    }
  }

  return (
    <div>
      <button onClick={changeName}>Change my name! </button>
      <h1> My Name is {name}! </h1>
    </div>
  );
}
export default TextButton;
