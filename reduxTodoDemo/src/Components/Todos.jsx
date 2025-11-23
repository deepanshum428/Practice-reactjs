import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo } from "../Features/Todo/toDoSlice";

const Todos = (props) => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <div>
      <div className="mt-8 flex flex-col items-center w-full">
        <h2 className="text-xl font-semibold text-gray-200 mb-4 flex justify-center">
          Todos
        </h2>
        <ul className="space-y-3 w-1/4">
          {todos.map((todo) => (
            <li
              key={todo.id}
              className="flex justify-around items-center bg-gray-800 text-gray-100 px-4 py-2 rounded shadow"
            >
              <span>{todo.text}</span>
              <button
                onClick={() => dispatch(removeTodo(todo.id))}
                className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
              >
                x
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Todos;
