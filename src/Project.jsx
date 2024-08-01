import { useState } from "react";

export function Project() {
  const [name, setName] = useState("sabr");
  const [age, setAge] = useState(0);

  function handleDecrement() {
    setAge((currentAge) => {
      return currentAge - 1;
    });
  }
  function handleIncrement() {
    setAge((currentAge) => {
      return currentAge + 1;
    });
  }

  return (
    <>
      <input
        value={name}
        onChange={(e) => {
          setName(e.target.value);
          console.log(e.target.value);
        }}
      />

      <p>
        <button onClick={handleDecrement}>-</button>
      </p>
      <span>{age}</span>
      <p>
        <button onClick={handleIncrement}>+</button>
      </p>
      <p>
        My name is {name} and I am {age} years old.
      </p>
    </>
  );
}
