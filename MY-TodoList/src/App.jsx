import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import List from "./components/List/List";
import ClearAllIcon from "@mui/icons-material/ClearAll";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  const [todolist, setTodolist] = useState([]);

  useEffect(() => {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTodolist(tasks);
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(todolist));
  }, [todolist]);

  const handleAddItem = () => {
    if (!text.trim()) return;

    const isDuplicate = todolist.some(
      (todo) => todo.item.toLowerCase() === text.toLowerCase()
    );

    if (isDuplicate) {
      alert("Item already exist");
      return;
    }

    const newItem = {
      id: uuidv4(),
      item: text,
      done: false,
    };
    const updatedList = [...todolist, newItem];
    setTodolist(updatedList);
    // localStorage.setItem("tasks", JSON.stringify(updatedList));
    setText("");
  };

  // console.log("TodoList", todolist);

  const handleToggle = (itemId) => {
    const newTodolist = todolist.map((listItem) => {
      if (listItem.id === itemId) {
        console.log(listItem);

        return { ...listItem, done: !listItem.done };
      }
      return listItem;
    });
    setTodolist(newTodolist);
  };

  const handleDelete = (itemId) => {
    const newTodolist = todolist.filter((listitem) => listitem.id !== itemId);
    setTodolist(newTodolist);
  };

  const handleClearAll = () => {
    setTodolist([]);
    localStorage.removeItem("tasks");
  };

  console.log(todolist);

  return (
    <div className="App">
      <h1>To Do List</h1>
      <div className="adder">
        <input
          type="text"
          name="text"
          placeholder="Add Items to your list.."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button className="task-btn" onClick={() => handleAddItem()}>
          Add Items
        </button>
        {/* <span onClick={() => handleAddItem()}>+</span> */}
      </div>
      <div
        className="clearAll"
        onClick={() => {
          handleClearAll();
        }}
      >
        <ClearAllIcon />
        <span>Clear All</span>
      </div>

      {todolist.length > 0 && (
        <List
          todolist={todolist}
          handleToggle={handleToggle}
          handleDelete={handleDelete}
        />
      )}
    </div>
  );
}

export default App;
