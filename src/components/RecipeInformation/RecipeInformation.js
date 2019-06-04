import React from 'react';
import RecipeImage from '../RecipeImage/RecipeImage';
import Calories from '../Calories/Calories';
import PrepTime from '../PrepTime/PrepTime';
import RecipeHealthLabel from '../RecipeLabel/RecipeHealthLabel';

class RecipeInformation (props) => {
  super(props);
  this.state = {
    recipeImageUrl: null,
    calories: null,
    totalTime: null,
    healthLabel: null
  }
};

return (
  <div className="recipe-information">
    <RecipeImage />
    <Calories />
    <PrepTime />
    <RecipeHealthLabel />
  </div>
);

export default RecipeInformation;
