import React, { useState } from "react";
import "./CounterApp.css";

const CounterApp = (props) => {
  const [counter, setCounter] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [isPause, setIsPause] = useState(false);
  const [intervalID, setIntervalID] = useState(null);

  const handleStart = () => {
    if (!isRunning) {
      clearInterval(intervalID);
      setIsRunning(true);
      setIsPause(false);
      const id = setInterval(() => setCounter((prev) => prev + 1), 1000);
      setIntervalID(id);
    }
  };
  const handlePause = () => {
    if (isPause) {
      setIsPause(false);
      clearInterval(intervalID);
      const id = setInterval(() => setCounter((prev) => prev + 1), 1000);
      setIntervalID(id);
    } else {
      setIsPause(true);
      clearInterval(intervalID);
    }
  };
  const handleStop = () => {
    clearInterval(intervalID);
    setCounter(0);
    setIsRunning(false);
    setIsPause(false);
  };

  return (
    <div className="main-container">
      <div className="container">
        <p>Counter: {counter}</p>
        <button className="button start-button" onClick={handleStart}>
          Start
        </button>
        <button className="button pause-button" onClick={handlePause}>
          {isPause ? "Resume" : "Pause"}
        </button>
        <button className="button stop-button" onClick={handleStop}>
          Stop
        </button>
      </div>
    </div>
  );
};

export default CounterApp;
