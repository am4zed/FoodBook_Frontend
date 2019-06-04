import React from 'react';
import RecipeImage from '../RecipeImage/RecipeImage';
import Calories from '../Calories/Calories';
import PrepTime from '../PrepTime/PrepTime';
import RecipeHealthLabel from '../RecipeLabel/RecipeHealthLabel';

const RecipeInformation = (props) => {
  return (
    <div className="recipe-information">
      <RecipeImage />
      <Calories />
      <PrepTime />
      <RecipeHealthLabel />
    </div>
  );
}
export default RecipeInformation;
