import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Provider } from "react-redux";
import { store } from "./App/store";
import AddTodo from "./components/AddTodo";
import Todos from "./Components/Todos";

function App() {
  return (
    <Provider store={store}>
      <h1 className="flex justify-center mt-5 text-2xl font-bold">
        Learn Redux Toolkit
      </h1>
      <AddTodo />
      <Todos />
    </Provider>
  );
}

export default App;
