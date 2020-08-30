import React from "react";
import "./Scroll.css";
export const Scroll = (props) => {
  return (
    <div
      style={{
        overflowY: "scroll",
        height: "500px",
      }}
    >
      {props.children}
    </div>
  );
};
