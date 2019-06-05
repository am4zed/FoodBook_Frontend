import React from "react";

const RecipeHealthLabel = props => {
  const { healthLabel } = props;
  return <img src={`../img/${healthLabel}.png`} />;
};

export default RecipeHealthLabel;
