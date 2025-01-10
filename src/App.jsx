function App() {
  const handleClick = (event) => {
    // event is a synthetic event
    console.log("Synthetic Event:", event); 
    console.log("Button clicked!");
    console.log("real event:", event.nativeEvent);
  };

  return (
    <button onClick={handleClick}>
      Click Me!
    </button>
  );
}

export default App;
