import { useState, useEffect } from "react";

export function Child() {
  const [age, setAge] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    console.log("Hi");
  }, []); //Works only when the component mounts. It has empty array as a parameter.

  useEffect(() => {
    console.log("Re-Render");
  }); //Works when the component mounts and any state change happens.

  useEffect(() => {
    //console.log("My name is", { name }, "and I am", { age }, "years old");
    console.log(`My name is ${name} and I am ${age} years old`); // Using template literals.
  }, [name, age]); //Works when the component mounts and there is a state change in name and age.

  useEffect(() => {
    document.title = name;

    return () => {
      console.log("Called before unmount");
    };
  }, [name]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      console.log(`My name is ${name}`);
    }, 1000);

    return () => {
      clearTimeout(timeout); //Cleanup fxn.
    };
  }, [name]);

  //Scenario to handle event listeners.
  useEffect(() => {
    const handler = () => {
      console.log(`After click name ${name} is printed`);
    };
    document.addEventListener("click", handler);
    console.log("inside effect function");

    return () => {
      document.removeEventListener("click", handler);
      console.log("Clean up function");
    };
  }, [name]);

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>
        <button onClick={() => setAge((a) => a - 1)}>-</button>
        {age}
        <button onClick={() => setAge((a) => a + 1)}>+</button>
      </p>
      <p>
        My name is {name} and I am {age} years old.
      </p>
    </div>
  );
}
