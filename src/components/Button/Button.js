import React from "react";

const Button = props => {
  const { className, value, onClick } = props;
  return (
    <button className={className} value={value} onClick={() => onClick()}>
      {value}
    </button>
  );
};

export default Button;
