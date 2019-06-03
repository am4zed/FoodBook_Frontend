import React from 'react';

const Ingredient = (props) => {
  return (
  <>
      <li>{props.volume} {props.unit} {props.name}</li>
  </>
)};

export default Ingredient;
