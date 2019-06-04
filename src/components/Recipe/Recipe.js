import React from "react";
import "./recipe.css";
import Ingredient from "../Ingredient";
import Method from "../Method";

const Recipe = props => {
  const ingredientsList = props.currentRecipe.ingredientLines.map(line => {
    return <Ingredient line={line} />;
  });
  return (
    <>
      <h1>{props.recipeName}</h1>
      <h2>Ingredients :</h2>
      <ul>{ingredientsList}</ul>
      <h2>Methods :</h2>
      <Method />
    </>
  );
};
export default Recipe;
