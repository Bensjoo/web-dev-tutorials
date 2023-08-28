import { useState, useEffect } from 'react';
import './App.css';


function App() {
  const [counter, setCounter] = useState(0); // hooks start with 'use¨ in func names
  useEffect(() => {
    setCounter(100);
  }, []); // can call code whenever variavble changes
  // callback function onClick
  return (
    <div className="App">
      <button onClick={() => setCounter((prevCount) => prevCount-1)}>-</button>
      <h1>{counter}</h1>
      <button onClick={() => setCounter((prevCount) => prevCount+1)}>+</button>
    </div>
  );
}

export default App;
