import React, { useRef, useEffect, useState } from "react";

function PreviousValueExample() {
  const [count, setCount] = useState(0);
  const prevCountRef = useRef();

  useEffect(() => {
    prevCountRef.current = count;
  });

  return (
    <div className="p-4 flex flex-col justify-center items-center">
      <p>Current Count: {count}</p>
      <p>Previous Count: {prevCountRef.current}</p>
      <button
        onClick={() => setCount(count + 1)}
        className="bg-purple-500 text-white px-4 py-2 rounded transition-transform duration-200 hover:scale-102 outline-none active:scale-95 cursor-pointer"
      >
        Increment
      </button>
    </div>
  );
}

export default PreviousValueExample;
