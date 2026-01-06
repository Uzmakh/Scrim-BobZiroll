import { useState } from "react";

const TwoStates = () => {
  const [name, setName] = useState("Muhammad");
  const [age, setAge] = useState("12");

  return (
    <>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="number"
        placeholder="Put age here"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />

      <p>
        Hello,{name}! you are {age} years old!
      </p>
    </>
  );
};

export default TwoStates;
