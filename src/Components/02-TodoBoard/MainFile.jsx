import React, { useState } from "react";
import Input from "./Input/Input";
import Board from "./Board/Board";

const MainFile = (props) => {
  const [taskList, setTaskList] = useState([]);

  console.log(taskList);

  return (
    <div className="px-12">
      <div className="flex flex-col items-center justify-center py-8 gap-4">
        <h1 className="text-2xl font-bold ">02- ToDO List</h1>
        <Input taskList={taskList} setTaskList={setTaskList} />
      </div>

      <Board taskList={taskList} setTaskList={setTaskList} />
    </div>
  );
};

export default MainFile;
