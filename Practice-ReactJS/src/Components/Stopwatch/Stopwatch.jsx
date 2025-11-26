import { useState, useEffect } from "react";

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    let interval = null;
    if (running && !paused) {
      interval = setInterval(() => setTime((prev) => prev + 10), 10);
    }
    return () => clearInterval(interval);
  }, [running, paused]);

  const handleStart = () => {
    setRunning(true);
    setPaused(false);
  };

  const handlePauseResume = () => {
    if (paused) {
      setPaused(false);
    } else {
      setPaused(true);
    }
  };

  const handleReset = () => {
    setRunning(false);
    setPaused(false);
    setTime(0);
  };

  return (
    <div className="flex flex-col items-center justify-center py-8">
      <h1 className="text-2xl font-semibold">01-Stopwatch</h1>
      <div className="text-xl font-semibold py-4">
        <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
        <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
      </div>
      <div className="w-1/3 max-w-sm flex flex-row justify-evenly">
        {!running && time === 0 && (
          <button
            className="border rounded bg-green-400 py-1 px-3"
            onClick={() => handleStart()}
          >
            Start
          </button>
        )}
        {running && (
          <button
            className="border rounded bg-yellow-400 py-1 px-3"
            onClick={() => handlePauseResume()}
          >
            {paused ? "Resume" : "Paused"}
          </button>
        )}
        <button
          className="border rounded bg-red-400 py-1 px-3"
          onClick={() => handleReset()}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Stopwatch;
