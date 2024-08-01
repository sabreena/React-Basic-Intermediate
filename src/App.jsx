import ArrayConcepts from "./ArrayConcepts"; //default import
import { Counter } from "./Counter";
import CounterClass from "./CounterClass";
import { Project } from "./Project";
import ProjectClass from "./ProjectClass";

function App() {
  return (
    <>
      <h2>Implementing useState concepts</h2>
      <Counter />
      <CounterClass />
      <h2>Implementing Array concepts</h2>
      <ArrayConcepts />
      <h2>Assignment Functional Component</h2>
      <Project />
      <h2>Assignment Class Component</h2>
      <ProjectClass />
    </>
  );
}

export default App;
