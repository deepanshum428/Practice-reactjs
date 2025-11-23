import React, { useRef, useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const renderCount = useRef(0);

  renderCount.current += 1;

  return (
    <div className=" flex flex-col justify-center items-center">
      <p>Count: {count}</p>
      <p>Component rendered: {renderCount.current} times</p>
      <button
        onClick={() => setCount(count + 1)}
        className="bg-green-500 text-white px-4 py-2 rounded transition-transform duration-200 hover:scale-102 outline-none active:scale-95 cursor-pointer "
      >
        Increase
      </button>
    </div>
  );
}

export default Counter;
