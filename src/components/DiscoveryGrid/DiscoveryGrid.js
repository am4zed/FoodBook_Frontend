import React from "react";
import RecipeCard from "../RecipeCard/RecipeCard";

const DiscoveryGrid = props => {
  if (!props.hits) return <></>;
  const recipeCards = props.hits.map(hit => {
    return <RecipeCard recipe={hit.recipe} />;
  });
  return <div className="recipe-card-grid">{recipeCards}</div>;
};

export default DiscoveryGrid;
