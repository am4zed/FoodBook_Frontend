import React from "react";
import "./style.css";

const RecipeImage = props => (
  <img src={props.recipeImageUrl} className="recipe-image" />
);

export default RecipeImage;
