import { useState } from "react";
import { Child } from "./Child";

export default function App() {
  const [show, setShow] = useState(true);

  const childComponent = show ? <Child /> : null;

  return (
    <div>
      <p>
        <button onClick={() => setShow((currentShow) => !currentShow)}>
          Show/Hide
        </button>
      </p>
      {childComponent}
    </div>
  );
}
