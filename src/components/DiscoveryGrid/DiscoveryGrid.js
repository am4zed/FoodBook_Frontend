import React from "react";
import RecipeCard from "../RecipeCard/RecipeCard";

const DiscoveryGrid = props => {
  const recipes = props.recipes.map(recipe => {
    return <RecipeCard recipe={recipe} />;
  });
  return <div className="recipe-card-grid">{recipes}</div>;
};

export default DiscoveryGrid;
