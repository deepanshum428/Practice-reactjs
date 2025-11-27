import React, { useState } from "react";

const Input = ({ taskList, setTaskList }) => {
  const [input, setInput] = useState("");

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const handleAddTask = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    setTaskList([...taskList, input]);
    setInput("");
  };

  return (
    <>
      <form
        action=""
        className="flex flex-row items-center gap-3"
        onSubmit={handleAddTask}
      >
        <input
          className="border rounded-lg py-2 px-4 text-lg"
          type="text"
          placeholder="enter your task.."
          value={input}
          onChange={handleInput}
        />
        <button
          className="bg-violet-300 text-white py-2 px-4 rounded-lg font-semibold hover:opacity-70 cursor-pointer"
          type="submit"
        >
          Add Item
        </button>
      </form>
    </>
  );
};

export default Input;
