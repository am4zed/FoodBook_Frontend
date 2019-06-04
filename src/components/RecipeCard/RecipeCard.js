import React from "react";
// import "./recipeCard.css";
import RecipeImage from "../RecipeImage/RecipeImage";
import RecipeLabel from "../RecipeLabel/RecipeLabel";
import Button from "../Button/Button";

const RecipeCard = props => {
  return (
    <div className="recipe-card" onClick={() => props.onClick(props.recipe)}>
      <RecipeImage recipeImageUrl={props.recipe.image} />
      <RecipeLabel label={props.recipe.label} />
      <Button
        className="favourite"
        value="<3"
        onClick={props.onFavouriteClick}
      />
    </div>
  );
};

export default RecipeCard;
