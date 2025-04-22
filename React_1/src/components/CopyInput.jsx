import React from "react";
import ClipBoard from "./ClipBoard.jsx";

const CopyInput = () => {
  const [inputValue, setInputValue] = React.useState("");
  const [copied, setCopied] = React.useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(inputValue).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />

      <button onClick={handleCopy}>copy</button>

      {/*  Pass in the copied value after being evaluated to true*/}

      <ClipBoard copied={copied} />
    </div>
  );
};
export default CopyInput;
