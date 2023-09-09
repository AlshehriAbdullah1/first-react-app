import { useState } from "react";
export default function MyInput() {
  const [myInputValue, setMyInputValue] = useState("");
  function handleInputChange(event) {
    setMyInputValue(event.target.value);
    //console.log();
    // setMyInputValue(value);
  }
  return (
    <>
      <label>Your Name</label>
      <input value={myInputValue} onChange={handleInputChange} />
    </>
  );
}
