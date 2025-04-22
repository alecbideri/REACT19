import React from "react";

const ClipBoard = ({ copied }) => {
  return (
    <section>
      {/*  check if the copy clipBoard is evaluated true if so , implement the style*/}
      {copied && (
        <div style={{ position: "absolute", bottom: "3rem" }}>
          Copy ClipBoard
        </div>
      )}
    </section>
  );
};
export default ClipBoard;
