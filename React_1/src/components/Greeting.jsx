import React from "react";

const Greeting = () => {
  const greeting = "Hello, Alec!";
  const date = new Date();
  const formattedDate = date.toLocaleDateString("en-US");

  return (
    <div>
      <h1>{greeting}</h1>
      <p>{formattedDate}</p>
    </div>
  );
};
export default Greeting;
