import React from "react";
import "./style.css"

const RecipeLabel = props => (
  <>
    <h1 className="recipe-card-label">{props.label}</h1>
  </>
);

export default RecipeLabel;
