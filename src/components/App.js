import React, { useState } from "react";
import "../styles/App.css";

function App() {
  const [data, setData] = useState([
    { label: "Entry-1", value: 10, name: "Entry-1" },
    { label: "Entry-2", value: 4, name: "Entry-2" },
    { label: "Entry-3", value: 9, name: "Entry-3" },
    { label: "Entry-4", value: 6, name: "Entry-4" },
    { label: "Entry-5", value: 7, name: "Entry-5" },
    { label: "Entry-6", value: 5, name: "Entry-6" },
    { label: "Entry-7", value: 5, name: "Entry-7" },
    { label: "Entry-8", value: 7, name: "Entry-8" },
    { label: "Entry-9", value: 9, name: "Entry-9" },
    { label: "Entry-10", value: 6, name: "Entry-10" },
  ]);

  const handleValueChange = (index, value, name) => {

  };

  return (
    <div className="App">
      <h3>Enter bar value and label for it</h3>
      <div className="bars">
        <div key={data.label} className="bar">
          <div className="bar-label">{data.label}</div>
          <input
            className="bar-value-input"
          />
          <input
            className="bar-name-input"
          />
        </div>
        <br />
      </div>
      <br />
      <br />
      <br />
      <div className="x-axis">
        <div className="bar-name tick">
          <div className="bar-value"></div>
        </div>
      </div>
    </div>
  );
}

export default App;