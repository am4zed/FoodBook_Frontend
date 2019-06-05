import React from "react";
import "./recipeBox.css";
import Recipe from "../Recipe/Recipe";
import RecipeInformation from "../RecipeInformation/RecipeInformation";
import Button from "../Button/Button";
import { withRouter } from "react-router-dom"
const queryString = require('query-string');

const RecipeBox = props => {
  console.log(props);
  if (!props.currentRecipe) {
    console.log(props.location);
    props.noCurrentRecipeFallback(queryString.parseUrl(props.location.search).query.id);
    return <></>
  }

  return (
    <div className="recipe-box">
      <Recipe className="recipe" currentRecipe={props.currentRecipe} />
      <RecipeInformation
        className="recipe-info"
        currentRecipe={props.currentRecipe}
        favourites={props.favourites}
        onFavouriteClick={props.onFavouriteClick}
        auth={props.auth}
      />
    </div>
  );
};

export default withRouter(RecipeBox);
