import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  function Twice() {
    setCount((count) => count + 1);
    setCount((count) => count + 1);
  }
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={Twice}>+</button>
    </div>
  );
};

export default Counter;
