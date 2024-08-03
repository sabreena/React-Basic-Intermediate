import { useState } from "react";
import { ChildClass } from "./ChildClass";

export default function App() {
  const [show, setShow] = useState(true);

  const childComponentClass = show ? <ChildClass /> : null;

  return (
    <div>
      <p>
        <button onClick={() => setShow((currentShow) => !currentShow)}>
          Show/Hide
        </button>
      </p>
      {childComponentClass}
    </div>
  );
}
