import React from "react";
import "./recipeBox.css";
import Recipe from "../Recipe/Recipe";
import RecipeInformation from "../RecipeInformation/RecipeInformation";

const RecipeBox = props => {
  <div className="recipe-box">
    <Recipe className="recipe" />
    <RecipeInformation className="recipe-info" />
  </div>;
};

export default RecipeBox;
