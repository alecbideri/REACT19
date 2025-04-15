import React from "react";

const Counter = () => {
  const [count, setCount] = React.useState(0);

  const handleClick = () => setCount(count + 1);

  return (
    <div>
      <h1>Count : {count}</h1>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
};
export default Counter;
