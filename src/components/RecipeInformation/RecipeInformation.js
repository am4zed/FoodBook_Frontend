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

  return (
    <div className="recipe-information">
      <RecipeImage recipeImageUrl={currentRecipe.image} />
      <Calories calories={currentRecipe.calories} />
      <PrepTime totalTime={currentRecipe.totalTime} />
      <div className="labels">{healthLabels}</div>
      <FavouriteButton onClick={() => onFavouriteClick()} />

    </div>
  );
};

export default RecipeInformation;
