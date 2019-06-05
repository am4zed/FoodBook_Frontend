import React from "react";
import "./recipeBox.css";
import Recipe from "../Recipe/Recipe";
import RecipeInformation from "../RecipeInformation/RecipeInformation";
import Button from "../Button/Button";

const RecipeBox = props => {
  return (
    <div className="recipe-box">
      <Recipe className="recipe" currentRecipe={props.currentRecipe} />
      <RecipeInformation
        className="recipe-info"
        currentRecipe={props.currentRecipe}
      />
      <div className="favorite-button">
        <Button className="favourite" value={"<3"} onCLick={props.onClick} />
      </div>
    </div>
  );
};

export default RecipeBox;
