import { useState } from "react";

export function Counter() {
  const [counter, setCounter] = useState(0);
  const [name, setName] = useState("Sabreena");
  const [age, setAge] = useState(37);
  const [person, setPerson] = useState({ name: "Musa", age: 7 }); // use of Object

  function handleCounter() {
    const newCounter = counter + 1;
    setCounter(newCounter);
    console.log("Old:", counter); // it will have old value of counter before re-render
    console.log("New:", newCounter); // updated value of counter as this variable has local scope
  }
  function handleClick() {
    setName("Sabr");

    setAge((currentAge) => {
      return currentAge + 1;
    });

    setAge((currentAge) => {
      return currentAge + 1;
    });
  }
  function handlePerson() {
    setPerson((currentPerson) => {
      return { ...currentPerson, name: "Master Musa" }; //use of spread operator
    });
  }

  return (
    <>
      <div onClick={handleCounter}>Counter: {counter} </div>
      <div onClick={handleClick}>
        Hi {name} {age}
      </div>
      <div onClick={handlePerson}>
        My name is: {person.name} and age is: {person.age}
      </div>
    </>
  );
}
