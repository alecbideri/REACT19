import React from "react";
import { Data } from "./DataContext.jsx";

const ComponentA = () => {
  return (
    <div>
      <Data.Consumer>{(name) => <h2>My name is {name}</h2>}</Data.Consumer>
    </div>
  );
};
export default ComponentA;
