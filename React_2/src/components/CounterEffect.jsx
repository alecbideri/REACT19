import React, { useEffect } from "react";

const CounterEffect = () => {
  const [counter, setCounter] = React.useState(0);

  useEffect(() => {
    document.title = `${counter} increments`;
  }, [counter]);

  return (
    <div>
      <h2>{counter}</h2>
      <button onClick={() => setCounter(counter + 1)}>Increment count</button>
    </div>
  );
};
export default CounterEffect;
