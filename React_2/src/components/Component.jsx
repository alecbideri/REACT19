import React from "react";
import { Data } from "./DataContext.jsx";
import ComponentA from "./ComponentA.jsx";

const Component = () => {
  const name = "Alec";
  return (
    <div>
      <Data.Provider value={name}>
        <ComponentA />
      </Data.Provider>
    </div>
  );
};
export default Component;
