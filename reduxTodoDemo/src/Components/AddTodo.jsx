import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../Features/Todo/toDoSlice.js";

const AddTodo = (props) => {
  const [input, setInput] = useState("");

  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    dispatch(addTodo(input));
    setInput("");
  };

  return (
    <form
      action=""
      onSubmit={addTodoHandler}
      className="space-x-3 mt-12 flex justify-center"
    >
      <input
        type="text"
        className="w-full max-w-md rounded-md border border-gray-300 
      bg-white text-gray-800 placeholder-gray-400 
      focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 
        py-2 px-3 leading-6 outline-none transition duration-200 ease-in-out"
        placeholder="Enter todo.."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
      >
        Add TOdo
      </button>
    </form>
  );
};

export default AddTodo;
