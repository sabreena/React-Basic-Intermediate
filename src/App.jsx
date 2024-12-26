import { useArray } from "./useArray";

const initialArray = [1, 2, 3];

function App() {
  const { array, set, pushElement, replace, filter, remove, clear, reset } =  useArray(initialArray);

  return (
    <>
      <div>{array.join(", ")}</div>
       <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: ".5rem",
          alignItems: "flex-start",
          marginTop: "1rem",
        }}
      >
        <button onClick={() => set([4, 5, 6])}>Set to [4, 5, 6]</button>
        <button onClick={() => pushElement(4)}>Push 4</button>
        <button onClick={() => replace(2, 8)}>
          Replace the third element with 8
        </button>
        <button onClick={() => filter(n => n < 3)}>
          Keep numbers less than 3
        </button>
        <button onClick={() => remove(1)}>Remove the second element</button>
        <button onClick={clear}>Clear</button>
        <button onClick={reset}>Reset</button>
        </div>
    </>
  );

}

export default App;
