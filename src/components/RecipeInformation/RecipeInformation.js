import React from "react";
import RecipeImage from "../RecipeImage/RecipeImage";
import Calories from "../Calories/Calories";
import PrepTime from "../PrepTime/PrepTime";
import Button from "../Button/Button";
import RecipeHealthLabel from "../RecipeHealthLabel/RecipeHealthLabel";

const RecipeInformation = props => {
  const { currentRecipe } = props;
  const healthLabels = currentRecipe.healthLabels.map(label => {
    return <RecipeHealthLabel healthLabel={label} />;
  });

  return (
    <div className="recipe-information">

      <RecipeImage recipeImageUrl ={currentRecipe.image}/>

      <Calories calories={currentRecipe.calories} />

      <PrepTime totalTime={currentRecipe.totalTime} />

      <ul>{healthLabels}</ul>

      <Button className="favourite" onCLick={props.onClick} />

    </div>
  );
};

export default RecipeInformation;
