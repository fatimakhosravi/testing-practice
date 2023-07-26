import { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="card">
        <button className="p-2" onClick={() => setCount((count) => count - 1)}>
          -
        </button>
        <span className="p-2">count is {count}</span>
        <button className="p-2" onClick={() => setCount((count) => count + 1)}>
          +
        </button>
      </div>
    </>
  );
};
