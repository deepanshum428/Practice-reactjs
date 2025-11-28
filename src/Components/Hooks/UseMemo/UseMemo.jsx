import { useMemo, useState } from "react";

const ExpensiveComponent = () => {
  const sum = () => {
    console.log("Complex calculation...");
    let value = 0;
    for (let i = 0; i < 1000000000; i++) {
      value += i;
    }
    return value;
  };
  const total = useMemo(() => sum(), []);

  //   const total = sum();

  return <p>sum: {total}</p>;
};

const MemoParentComponent = () => {
  const [count, setCount] = useState(0);
  console.log("main component run");

  return (
    <div className="p-4 h-lvh font-display traking-wider flex flex-col justify-center items-center bg-white text-black">
      <ExpensiveComponent />
      <button
        className="px-6 py-3 bg-blue-300 rounded-sm cursor-pointer"
        onClick={() => setCount((prev) => prev + 1)}
      >
        re-render Parent
      </button>
      <p>Parent re-render: {count}</p>
    </div>
  );
};

export default MemoParentComponent;
