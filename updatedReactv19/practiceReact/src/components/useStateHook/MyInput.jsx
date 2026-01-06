import { useState } from "react";

export default function MyInput() {
  const [text, setText] = useState("Hello");

  function handleChange(e) {
    setText(e.target.value);
  }

  function changeText() {
    setText('Hello');
  }
  return (
    <>
      <input type="text" value={text} onChange={handleChange} />
      <p>You typed: {text}</p>

      <button onClick={changeText}> Reset </button>
      {/* <button onClick={() => {setText('Hello')}}> Reset </button> */}
    </>
  );
}
