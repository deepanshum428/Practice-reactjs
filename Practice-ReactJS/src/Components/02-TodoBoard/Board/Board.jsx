import React from "react";

const Board = ({ taskList, setTaskList }) => {
  console.log("Board prop: ", taskList);

  const handleDelete = (deleteIndex) => {
    const newTaskList = taskList.filter((_, taskID) => taskID !== deleteIndex);
    setTaskList(newTaskList);
  };

  return taskList.map((task, index) => (
    <div
      key={index}
      className=" bg-violet-200 max-w-md rounded-xl flex flex-col items-center justify-center border text-center text-large pt-3 pb-4 px-4 md:px-6"
    >
      <ul>
        <li>
          <p>{task}</p>
          <button
            type="submit"
            onClick={() => handleDelete(index)}
            className="bg-red-300 px-4 rounded-lg hover:opacity-70 cursor-pointer py-2"
          >
            Delete
          </button>
        </li>
      </ul>
    </div>
  ));
};

export default Board;
