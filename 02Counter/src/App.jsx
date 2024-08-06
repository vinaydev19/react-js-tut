import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);

  const addvalue = () => {
    if (counter == 20) {
      setCounter(counter);
    } else {
      setCounter(counter + 1);
    }
    console.log("click", counter);
  };
  const removevalue = () => {
    if (counter == 0) {
      setCounter(counter);
    } else {
      setCounter(counter - 1);
    }
    console.log("click", counter);
  };

  return (
    <>
      <h1>counter App</h1>
      <h2>counter Value: {counter}</h2>
      <button onClick={addvalue}>Add value: {counter}</button>
      <br />
      <br />
      <button onClick={removevalue}>remove value: {counter}</button>
    </>
  );
}

export default App;
