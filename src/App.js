import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [status, setStatus] = useState("Loading...");
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    if (percentage < 100) {
      setTimeout(() => {
        setPercentage(percentage + 1);
      }, 500);
    } else {
      setStatus("Completed!");
    }
  }, [percentage]);
  return (
    <div className="App">
      <h1>Progress Bar</h1>
      <div className="bar">
        <div
          className="percentage"
          style={{ height: "100%", width: `${percentage}%` }}
        ></div>
        <span style={{ color: percentage >= 50 ? "#fff" : "#000" }}>
          {percentage}%
        </span>
      </div>
      <span>{status}</span>
    </div>
  );
}

export default App;
