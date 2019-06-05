import React from "react";
import "./recipe.css";
import Ingredient from "../Ingredient/Ingredient";
import Method from "../Method/Method";
import RecipeLabel from "../RecipeLabel/RecipeLabel";

const Recipe = props => {
  const ingredientsList = props.currentRecipe.ingredientLines.map(line => {
    return <Ingredient line={line} />;
  });
  return (
    <div className="recipe-container">
      <h4 className="recipe-title">
        <RecipeLabel label={props.currentRecipe.label} />
      </h4>

      <div className="ingridients-container">
        <h4 id="ingridients">Ingredients </h4>

        <ul id="ingridient-list">{ingredientsList}</ul>

        <h4>
          Methods : <Method url={props.currentRecipe.url} />
        </h4>
      </div>
    </div>
  );
};
export default Recipe;
