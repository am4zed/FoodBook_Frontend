import React from 'react';
import RecipeImage from '../RecipeImage/RecipeImage';
import Calories from '../Calories/Calories';
import PrepTime from '../PrepTime/PrepTime';
import RecipeHealthLabel from '../RecipeLabel/RecipeHealthLabel';

const RecipeInformation = (props) => {
  const healthLabels = props.currentRecipe.healthLabels.map((label) => {
    return <RecipeHealthLabel healthLabel={label} />;
  })

  return (
    <div className="recipe-information">
      <RecipeImage />
      <Calories />
      <PrepTime />
      <ul>{healthLabels}</ul>
    </div>
  );
}

export default RecipeInformation;
