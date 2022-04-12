import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import convert from "./binary";
import { useEffect } from "react";

function App() {
  const [binary, setBinary] = useState("");
  const [number, setNumber] = useState("");

  useEffect(() => {
    if (binary.length === 0) {
      setNumber("");
    } else {
      setNumber(convert(binary));
    }
  }, [binary]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <input
          type="number"
          value={binary}
          onChange={(e) => setBinary(e.target.value)}
        />

        <p>
          <code>
            {binary} {number}
          </code>
        </p>

        <button
          onClick={() => {
            setNumber(convert(binary));
          }}
        >
          Convert Binary to Decimal
        </button>
      </header>
    </div>
  );
}

export default App;
