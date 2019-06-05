import React from "react";

const RecipeHealthLabel = props => {
  const { healthLabel } = props;
  return <img src={`../img/${healthLabel.toLowerCase()}.png`} />;

  return <li>{healthLabel}</li>;
};

export default RecipeHealthLabel;
