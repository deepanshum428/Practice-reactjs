import "./App.css";
import CounterApp from "./Components/CounterApp/CounterApp";
import PreviousValueExample from "./Components/Hooks/UseRef/PreviousValueExample";
import Problem from "./Components/Problems/Problem";
import UseCallback from "./Components/Hooks/UseCallback/UseCallback";
import MemmoParentComponent from "./Components/Hooks/UseMemo/UseMemo";
import Stopwatch from "./Components/Stopwatch/Stopwatch";
import { useState } from "react";
import MainApp from "./Components/AuthenticationApp/MainApp";
import MainFile from "./Components/02-TodoBoard/MainFile";

function App() {
  return (
    <div>
      {/* <MainApp /> */}
      {/* <Stopwatch /> */}
      <MainFile />
    </div>
  );
}

export default App;
