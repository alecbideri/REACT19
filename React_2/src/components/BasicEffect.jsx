import React, { useEffect } from "react";

const BasicEffect = () => {
  useEffect(() => {
    console.log("Hello useEffect");
  });
  return <div></div>;
};
export default BasicEffect;
