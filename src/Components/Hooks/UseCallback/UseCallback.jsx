import { useCallback, useState, memo } from "react";

const Button = memo(({ onClick, children }) => {
  console.log(`Rendring button: ${children}`);

  return (
    <button
      className={`text-black px-5 py-2 ${
        children === "Increment" ? "bg-green-400" : "bg-red-400"
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
});

export default function UseCallback() {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    console.log("render inside useCallback hook");
    setCount((prev) => prev + 1);
  }, []);

  const decrement = useCallback(() => {
    console.log("render inside useCallback hook");
    setCount((prev) => prev - 1);
  }, []);

  return (
    <div className="p-4 h-lvh font-display tracking-wider flex flex-col justify-center items-center bg-black text-white gap-2">
      <h1 className="mb-4">Count: {count}</h1>
      <Button onClick={increment}>Increment</Button>
      <Button onClick={decrement}>Decrement</Button>
    </div>
  );
}
