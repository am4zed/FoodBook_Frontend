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
    <>
      <RecipeLabel />
      <h2>Ingredients :</h2>
      <ul>{ingredientsList}</ul>
      <h2>Methods :</h2>
      <Method />
    </>
  );
};
export default Recipe;
