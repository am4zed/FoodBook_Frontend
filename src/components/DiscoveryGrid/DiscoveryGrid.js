import React from "react";
import RecipeCard from "../RecipeCard/RecipeCard";
import './dicoverygrid.css'

const DiscoveryGrid = props => {
  if (!props.hits) return <></>;
  const recipeCards = props.hits.map(hit => {
    return <RecipeCard recipe={hit.recipe} onClick={props.onClick} />;
  });
  return <div className="recipe-card-grid">{recipeCards}</div>;
};

export default DiscoveryGrid;
