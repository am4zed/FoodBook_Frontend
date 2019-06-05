import React from "react";
import RecipeImage from "../RecipeImage/RecipeImage";
import Calories from "../Calories/Calories";
import PrepTime from "../PrepTime/PrepTime";
import Button from "../Button/Button";
import RecipeHealthLabel from "../RecipeHealthLabel/RecipeHealthLabel";
import FavouriteButton from "../FavouriteButton/FavouriteButton"
import "./RecipeInformation.css";

const RecipeInformation = props => {
  const { currentRecipe } = props;
  const healthLabels = currentRecipe.healthLabels.map(label => {
    return <RecipeHealthLabel healthLabel={label} />;
  });

  const onFavouriteClick = () => {
    props.onFavouriteClick(currentRecipe);
  }

  const renderFavouriteIfPossible = () => {
    if (props.auth.isAuthenticated()) return <FavouriteButton onClick={() => onFavouriteClick()} />
    return <h4 className="favourite">Please login to favourite this recipe!</h4>
  }

  return (
    <div className="recipe-information">
      <RecipeImage recipeImageUrl={currentRecipe.image} />
      <Calories calories={currentRecipe.calories} />
      <PrepTime totalTime={currentRecipe.totalTime} />
      <div className="labels">{healthLabels}</div>
      {renderFavouriteIfPossible()}
    </div>
  );
};

export default RecipeInformation;
