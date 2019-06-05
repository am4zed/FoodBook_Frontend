import React from "react";
// import "./recipeCard.css";
import RecipeImage from "../RecipeImage/RecipeImage";
import RecipeLabel from "../RecipeLabel/RecipeLabel";
import './recipeCard.css'

const RecipeCard = props => {
  return (
    <div className="recipe-card" onClick={() => props.onClick(props.recipe)}>
      <RecipeImage recipeImageUrl={props.recipe.image} />
      <RecipeLabel label={props.recipe.label} />
    </div>
  );
};

export default RecipeCard;
