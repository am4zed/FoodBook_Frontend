import React from "react";
import "./style.css";

const Method = props => {
  return (
    <>
      <span className="instructions">
        <a target="_blank" href={props.url}>
          Instructions
        </a>
      </span>
    </>
  );
};

export default Method;
