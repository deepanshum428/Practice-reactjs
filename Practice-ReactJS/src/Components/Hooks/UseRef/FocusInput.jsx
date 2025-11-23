import React, { useRef } from "react";

function FocusInput() {
  const inputRef = useRef(null);

  const handleFocus = () => {
    inputRef.current.focus();
  };

  return (
    <div className="p-4">
      <input
        ref={inputRef}
        type="text"
        placeholder="Type something..."
        className="border p-2"
      />
      <button
        onClick={handleFocus}
        className="ml-2 bg-blue-500 text-white px-4 py-2 rounded"
      >
        Focus Input
      </button>
    </div>
  );
}

export default FocusInput;
