import React from "react";

const Button = props => {
  const { className, value } = props;
  const onClick = evt => {
    evt.stopPropagation();
    props.onClick();
  };
  return (
    <button className={className} value={value} onClick={evt => onClick(evt)}>
      {value}
      {props.children}
    </button>
  );
};

export default Button;
