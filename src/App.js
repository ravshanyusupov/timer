import './App.css';
import React, {useRef, useState} from "react";

function App() {
  const [timer, setTimer] = useState(0);
  const ref = useRef(null);
  const startHandler = () => {
      ref.current = setInterval(() =>{
          setTimer(prev => prev + 1)
      }, 1000)
  }
  const stopHandler = () => {
      clearInterval(ref.current)
  }
  const resetHandler = () => {
      setTimer(0)
  }
    console.log(ref)
  return (
    <div className="App">
      <h1>Timer</h1>
      <h1>{timer}</h1>
      <button
          onClick={startHandler}
      >Start</button>
      <button
          onClick={stopHandler}
      >Stop</button>
      <button
          onClick={resetHandler}
      >Reset</button>
    </div>
  );
}

export default App;
