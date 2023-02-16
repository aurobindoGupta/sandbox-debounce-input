import "./styles.css";
import { useState } from "react";

export default function App() {
  const [a, Seta] = useState();
  let timer;
  const db = (fn, delay) => {
    
    return function (...args) {
      clearTimeout(timer);
      timer = setTimeout(() => {
        fn(...args);
        console.log(fn);
        
      }, delay);
    };
  };
  const handleChange = (e) => {
    Seta(e.target.value);
    console.log(e.target.value);
  };

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <input onChange={db((e) => { handleChange(e);}, 2000)}id="inputob"></input>
      <h1 id="yo">{a}</h1>
    </div>
  );
}
