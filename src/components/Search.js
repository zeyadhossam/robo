import React from "react";
import "./Search.css";

export const SearchBox = ({ searchChange }) => {
  return (
    <div className="pa2">
      <input
        className="pa3 br-pill tc ba b--green bg-lightest-blue"
        type="search"
        placeholder="search for your robot"
        onChange={searchChange}
        maxLength="24"
      ></input>
    </div>
  );
};
