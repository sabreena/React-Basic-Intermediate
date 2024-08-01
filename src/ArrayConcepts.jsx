import { useState } from "react";

const initialValue = ["A", "B", "C"];

export default function ArrayConcepts() {
  const [array, setArray] = useState(initialValue);
  const [value, setValue] = useState("");
  // console.log(array);

  function removeFirstElement() {
    setArray((currentArray) => {
      return currentArray.slice(1);
    });
  }

  function removeSpecificLetter(letter) {
    setArray((currentArray) => {
      return currentArray.filter((element) => element !== letter);
    });
  }

  function addLetterToStart(letter) {
    setArray((currentArray) => {
      return [letter, ...currentArray];
    });
  }

  function addLetterToEnd(letter) {
    setArray((currentArray) => {
      return [...currentArray, letter];
    });
  }

  function clear() {
    setArray([]);
  }

  function reset() {
    setArray(initialValue);
  }

  function updateAToH() {
    setArray((currentArray) => {
      return currentArray.map((element) => {
        if (element === "A") return "H";
        return element;
      });
    });
  }

  function addLetterAtIndex(letter, index) {
    setArray((currentArray) => {
      return [
        ...currentArray.slice(0, index), // slices from 0 and ends before index 2 ["A", "B"]
        letter, // letter C will be placed at index 2
        ...currentArray.slice(index), // slices from index 2 ["C"]
      ];
    });
  }

  return (
    <div>
      <p>
        <button onClick={removeFirstElement}>Remove First Element</button>
      </p>
      <p>
        <button onClick={() => removeSpecificLetter("B")}>Remove All B</button>
      </p>
      <p>
        <button onClick={() => addLetterToStart("B")}>
          Add Letter To Start
        </button>
      </p>
      <p>
        <button onClick={() => addLetterToEnd("Z")}>Add Letter To End</button>
      </p>
      <p>
        <button onClick={clear}>Clear</button>
      </p>
      <p>
        <button onClick={reset}>Reset</button>
      </p>
      <p>
        <button onClick={updateAToH}>Update A To H</button>
      </p>
      <p>
        <button onClick={() => addLetterAtIndex("C", 2)}>
          Add C At Index 2
        </button>
      </p>
      <p>
        <input value={value} onChange={(e) => setValue(e.target.value)} />
      </p>
      <p>
        <button onClick={() => addLetterToStart(value)}>
          Add Value To Array
        </button>
      </p>
      {array.join(", ")}
    </div>
  );
}
